import React, {useEffect, useMemo} from 'react';
import {Animated, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import {CoursesProps} from '../../hooks/CoursesManager';
import {useLessons, LessonsProps} from '../../hooks/LessonsManager';
import LessonItem from './LessonItem';

import {
  Container,
  ContainerLessons,
  HeaderLessons,
  LessonTitle,
  LessonText,
  ContainerLoading,
  ContainerNoResult,
  NoResultText,
} from './styles';

interface LessonsParams {
  route: {
    params: {
      course: CoursesProps;
    };
  };
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Lessons = ({
  route: {
    params: {course},
  },
}: LessonsParams) => {
  const {lessons, selectCourse, loading} = useLessons();

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

        {loading ? (
          <ContainerLoading>
            <ActivityIndicator size={46} animating color="#6548a3" />
          </ContainerLoading>
        ) : (
          <AnimatedFlatList
            data={lessons}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            keyExtractor={(classItem: LessonsProps) => classItem.id}
            renderItem={({index, item: lesson}) => (
              <LessonItem {...{index, y, lesson, course}} />
            )}
            ListEmptyComponent={lessonNoResult}
            style={{
              marginTop: 4,
            }}
            {...{onScroll}}
          />
        )}
      </ContainerLessons>
    </Container>
  );
};

const lessonNoResult = () => {
  return (
    <ContainerNoResult>
      <NoResultText>Sem resultados!</NoResultText>
    </ContainerNoResult>
  );
};

export default Lessons;
