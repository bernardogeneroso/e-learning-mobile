import React, {createContext, useContext, useEffect, useState} from 'react';

import api from '../services/api';
import {CoursesProps} from './CoursesManager';

export interface LessonsProps {
  id: string;
  name: string;
  description: string;
  minutes: number;
  completed: boolean;
  leasson_number: string;
  courses_id: string;
  created_at: string;
  updated_at: string;
}

interface LessonsManagerData {
  lessons: LessonsProps[];
  course: CoursesProps;
  loading: boolean;
  lessonCompleted(id: string): void;
  actualIndex(id: string): number;
  nextLesson(id: string): LessonsProps | undefined;
  previouLesson(id: string): LessonsProps | undefined;
  selectCourse(course: CoursesProps): void;
}

const LessonsManager = createContext<LessonsManagerData>(
  {} as LessonsManagerData,
);

const LessonsProvider = ({children}: any) => {
  const [lessons, setLessons] = useState<LessonsProps[]>([]);
  const [course, setCourse] = useState<CoursesProps>({} as CoursesProps);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (course) {
      setLoading(true);
      api.get(`/leassons/${course.id}`).then(({data}) => {
        setLessons(data);
        setLoading(false);
      });
    }
  }, [course]);

  const selectCourse = (course: CoursesProps) => {
    setCourse(course);
  };

  const lessonCompleted = async (id: string) => {
    await api.put(`/leassons/${id}`);

    setLessons((state) => {
      const updateState = state.map((lessonNow) => {
        if (id === lessonNow.id) {
          return {
            ...lessonNow,
            completed: true,
          };
        }

        return lessonNow;
      });

      return updateState;
    });
  };

  const actualIndex = (id: string): number => {
    const indexOfActualLesson = lessons.findIndex(
      (lesson: LessonsProps) => lesson.id === id,
    );

    return indexOfActualLesson;
  };

  const nextLesson = (id: string): LessonsProps | undefined => {
    const indexOfActualLesson = lessons.findIndex(
      (lesson: LessonsProps) => lesson.id === id,
    );

    if (indexOfActualLesson === lessons.length - 1) {
      return undefined;
    }

    return lessons[indexOfActualLesson + 1];
  };

  const previouLesson = (id: string): LessonsProps | undefined => {
    const indexOfActualLesson = lessons.findIndex(
      (lesson: LessonsProps) => lesson.id === id,
    );

    if (indexOfActualLesson === 0) {
      return undefined;
    }

    return lessons[indexOfActualLesson - 1];
  };

  return (
    <LessonsManager.Provider
      value={{
        lessons,
        course,
        loading,
        lessonCompleted,
        actualIndex,
        nextLesson,
        previouLesson,
        selectCourse,
      }}>
      {children}
    </LessonsManager.Provider>
  );
};

function useLessons(): LessonsManagerData {
  const context = useContext(LessonsManager);

  if (!context) {
    throw new Error('useLessons must be used within an LessonsProvider');
  }

  return context;
}

export {LessonsProvider, useLessons};
