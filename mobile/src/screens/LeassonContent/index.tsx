import React, {useEffect, useMemo, useState} from 'react';
import {Animated} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import {CoursesProps} from '../../hooks/CoursesManager';
import api from '../../services/api';
import LeassonItem from './LeassonItem';

import {
  Container,
  ContainerLeasson,
  HeaderLeasson,
  LeassonTitle,
  LeassonText,
} from './styles';

interface LeassonContentParams {
  route: {
    params: {
      course: CoursesProps;
    };
  };
}

export interface LeassonsProps {
  id: string;
  name: string;
  description: string;
  minutes: number;
  completed: number;
  courses_id: string;
  created_at: string;
  updated_at: string;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const LeassonContent = ({
  route: {
    params: {course},
  },
}: LeassonContentParams) => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  const [leassons, setCourses] = useState<CoursesProps[]>([]);

  useEffect(() => {
    api.get(`/leassons/${course.id}`).then(({data}) => {
      setCourses(data);
    });
  }, [course.id]);

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

      <ContainerLeasson>
        <HeaderLeasson>
          <LeassonTitle>{course.name}</LeassonTitle>

          <LeassonText>{handleDisciplineCoursees}</LeassonText>
        </HeaderLeasson>

        <AnimatedFlatList
          data={leassons}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyExtractor={(classItem: LeassonsProps) => classItem.id}
          renderItem={({index, item: leasson}) => (
            <LeassonItem {...{index, y, leasson}} />
          )}
          style={{
            marginTop: 4,
          }}
          {...{onScroll}}
        />
      </ContainerLeasson>
    </Container>
  );
};

export default LeassonContent;
