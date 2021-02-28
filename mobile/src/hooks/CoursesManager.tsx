import React, {
  createContext,
  useEffect,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CoursesProps {
  id: string;
  name: string;
  image: string;
  image_url: string;
  leassons: number;
  created_at: string;
  updated_at: string;
}

interface CoursesManagerData {
  courses: CoursesProps[];
  coursesSaved: CoursesProps[];
  modalVisible: ModalVisibleProps;
  addFavorite(courseReceive: CoursesProps): void;
  removeFavorite(courseReceive: CoursesProps): void;
  checkIfIsFavorite(id: string): boolean;
  toggleModal(): void;
  modalAddCourse(course: CoursesProps): void;
}

export interface ModalVisibleProps {
  toggle: boolean;
  course?: CoursesProps;
}

const CoursesManager = createContext<CoursesManagerData>(
  {} as CoursesManagerData,
);

const CoursesProvider: React.FC = ({children}) => {
  const [courses, setCourses] = useState<CoursesProps[]>([]);
  const [coursesSaved, setCoursesSaved] = useState<CoursesProps[]>([]);
  const [modalVisible, setModalVisible] = useState<ModalVisibleProps>({
    toggle: false,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const result = await AsyncStorage.getItem('e-learning:courses-saved');

      if (result) {
        setCoursesSaved(JSON.parse(result));
      }
    }

    loadStoragedData();

    api.get('/courses').then(({data}) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  const addFavorite = useCallback(
    async (courseReceive: CoursesProps) => {
      if (coursesSaved.some((course) => course.id === courseReceive.id)) {
        return;
      }

      const coursesSavedPushed = [...coursesSaved, courseReceive];

      await AsyncStorage.setItem(
        'e-learning:courses-saved',
        JSON.stringify(coursesSavedPushed),
      );

      setCoursesSaved((state) => [...state, courseReceive]);
    },
    [coursesSaved],
  );

  const removeFavorite = useCallback(
    async (disciplineReceive: CoursesProps) => {
      const coursesFilter = coursesSaved.filter(
        (discipline: CoursesProps) => discipline.id !== disciplineReceive.id,
      );

      await AsyncStorage.setItem(
        'e-learning:courses-saved',
        JSON.stringify(coursesFilter),
      );

      setCoursesSaved(coursesFilter);
    },
    [coursesSaved],
  );

  const checkIfIsFavorite = useCallback(
    (id: string): boolean => {
      return coursesSaved.some((course) => course.id === id);
    },
    [coursesSaved],
  );

  const toggleModal = useCallback(() => {
    setModalVisible((state) => {
      return {
        ...state,
        toggle: !state.toggle,
      };
    });
  }, []);

  const modalAddCourse = useCallback((course: CoursesProps) => {
    setModalVisible(() => {
      return {
        toggle: true,
        course,
      };
    });
  }, []);

  return (
    <CoursesManager.Provider
      value={{
        courses,
        coursesSaved,
        modalVisible,
        addFavorite,
        removeFavorite,
        checkIfIsFavorite,
        toggleModal,
        modalAddCourse,
      }}>
      {children}
    </CoursesManager.Provider>
  );
};

function useCourses(): CoursesManagerData {
  const context = useContext(CoursesManager);

  if (!context) {
    throw new Error('useAuth must be used within an CoursesProvider');
  }

  return context;
}

export {CoursesProvider, useCourses};
