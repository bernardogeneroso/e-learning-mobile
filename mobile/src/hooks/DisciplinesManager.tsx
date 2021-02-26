import React, {
  createContext,
  useEffect,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DisciplinesProps {
  id: string;
  name: string;
  image: string;
  image_url: string;
  classes: number;
  created_at: string;
  updated_at: string;
}

interface DisciplinesManagerData {
  disciplines: DisciplinesProps[];
  disciplinesSaved: DisciplinesProps[];
  modalVisible: ModalVisibleProps;
  addFavorite(disciplineReceive: DisciplinesProps): void;
  removeFavorite(disciplineReceive: DisciplinesProps): void;
  toggleModal(): void;
  modalAddDiscipline(discipline: DisciplinesProps): void;
}

export interface ModalVisibleProps {
  toggle: boolean;
  discipline?: DisciplinesProps;
}

const DisciplinesManager = createContext<DisciplinesManagerData>(
  {} as DisciplinesManagerData,
);

const DisciplinesProvider: React.FC = ({children}) => {
  const [disciplines, setDisciplines] = useState<DisciplinesProps[]>([]);
  const [disciplinesSaved, setDisciplinesSaved] = useState<DisciplinesProps[]>(
    [],
  );
  const [modalVisible, setModalVisible] = useState<ModalVisibleProps>({
    toggle: false,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const result = await AsyncStorage.getItem('e-learning:disciplines-saved');

      if (result) {
        setDisciplinesSaved(JSON.parse(result));
      }
    }

    loadStoragedData();

    api.get('/disciplines').then(({data}) => {
      setDisciplines(data);
      setLoading(false);
    });
  }, []);

  const addFavorite = useCallback(
    async (disciplineReceive: DisciplinesProps) => {
      if (
        disciplinesSaved.some(
          (discipline) => discipline.id === disciplineReceive.id,
        )
      ) {
        return;
      }

      const disciplinesSavedPushed = [...disciplinesSaved, disciplineReceive];

      await AsyncStorage.setItem(
        'e-learning:disciplines-saved',
        JSON.stringify(disciplinesSavedPushed),
      );

      setDisciplinesSaved((state) => [...state, disciplineReceive]);
    },
    [disciplinesSaved],
  );

  const removeFavorite = useCallback(
    async (disciplineReceive: DisciplinesProps) => {
      const disciplinesFilter = disciplinesSaved.filter(
        (discipline: DisciplinesProps) =>
          discipline.id !== disciplineReceive.id,
      );

      await AsyncStorage.setItem(
        'e-learning:disciplines-saved',
        JSON.stringify(disciplinesFilter),
      );

      setDisciplinesSaved(disciplinesFilter);
    },
    [disciplinesSaved],
  );

  const toggleModal = useCallback(() => {
    setModalVisible((state) => {
      return {
        ...state,
        toggle: !state.toggle,
      };
    });
  }, []);

  const modalAddDiscipline = useCallback((discipline: DisciplinesProps) => {
    setModalVisible(() => {
      return {
        toggle: true,
        discipline,
      };
    });
  }, []);

  return (
    <DisciplinesManager.Provider
      value={{
        disciplines,
        disciplinesSaved,
        modalVisible,
        addFavorite,
        removeFavorite,
        toggleModal,
        modalAddDiscipline,
      }}>
      {children}
    </DisciplinesManager.Provider>
  );
};

function useDisciplines(): DisciplinesManagerData {
  const context = useContext(DisciplinesManager);

  if (!context) {
    throw new Error('useAuth must be used within an DisciplinesProvider');
  }

  return context;
}

export {DisciplinesProvider, useDisciplines};
