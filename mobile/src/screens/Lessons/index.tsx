import React, {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import {CoursesProps} from '../../hooks/CoursesManager';
import {useLessons} from '../../hooks/LessonsManager';
import LessonItem from './LessonItem';

import {
  Container,
  ContainerLessons,
  HeaderLessons,
  LessonTitle,
  LessonText,
} from './styles';

interface LessonsParams {
  route: {
    params: {
      course: CoursesProps;
    };
  };
}

export interface LessonsProps {
  id: string;
  name: string;
  description: string;
  minutes: number;
  completed: number;
  leasson_number: string;
  courses_id: string;
  created_at: string;
  updated_at: string;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Lessons = ({
  route: {
    params: {course},
  },
}: LessonsParams) => {
  const {lessons, selectCourse} = useLessons();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  useEffect(() => {
    selectCourse(course);
  }, [selectCourse, course]);

  const handleDisciplineCoursees = useMemo(() => {
    return course.leassons === 0
      ? 'Sem aulas'
      : course.leassons === 1
      ? `${course.leassons} aula`
      : `${course.leassons} aulas`;
  }, [course.leassons]);

  return (
    <Container>
      <Header course={course} courseDashboard />

      <ContainerLessons>
        <HeaderLessons>
          <LessonTitle>{course.name}</LessonTitle>

          <LessonText>{handleDisciplineCoursees}</LessonText>
        </HeaderLessons>

        <AnimatedFlatList
          data={lessons}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyExtractor={(classItem: LessonsProps) => classItem.id}
          renderItem={({index, item: lesson}) => (
            <LessonItem {...{index, y, lesson, course}} />
          )}
          style={{
            marginTop: 4,
          }}
          {...{onScroll}}
        />
      </ContainerLessons>
    </Container>
  );
};

export default Lessons;
