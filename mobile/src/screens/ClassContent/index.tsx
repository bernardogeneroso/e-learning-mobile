import React, {useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import {DisciplinesProps} from '../../hooks/DisciplinesManager';
import api from '../../services/api';
import ClassItem from './ClassItem';

import {
  Container,
  ContainerClass,
  HeaderClass,
  ClassTitle,
  ClassesText,
} from './styles';

export interface ClassesProps {
  id: string;
  name: string;
  description: string;
  minutes: number;
  completed: boolean;
  discipline_id: string;
  created_at: string;
  updated_at: string;
}

interface ClassContentParams {
  route: {
    params: {
      discipline: DisciplinesProps;
    };
  };
}

const ClassContent = ({
  route: {
    params: {discipline},
  },
}: ClassContentParams) => {
  const [classes, setClasses] = useState<ClassContentParams>([]);

  useEffect(() => {
    api.get(`/classes/${discipline.id}`).then(({data}) => {
      console.log(data);
      setClasses(data);
    });
  }, [discipline.id]);

  const handleDisciplineClasses = useMemo(() => {
    return discipline.classes === 0
      ? 'Sem aulas'
      : discipline.classes === 1
      ? `${discipline.classes} aula`
      : `${discipline.classes} aulas`;
  }, [discipline.classes]);

  return (
    <Container>
      <Header discipline={discipline} classDashboard />

      <ContainerClass>
        <HeaderClass>
          <ClassTitle>{discipline.name}</ClassTitle>

          <ClassesText>{handleDisciplineClasses}</ClassesText>
        </HeaderClass>

        <FlatList
          data={classes}
          showsVerticalScrollIndicator={false}
          keyExtractor={(classItem: ClassesProps) => classItem.id}
          renderItem={({item}) => <ClassItem classItem={item} />}
        />
      </ContainerClass>
    </Container>
  );
};

export default ClassContent;
