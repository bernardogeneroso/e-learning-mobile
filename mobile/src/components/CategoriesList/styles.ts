import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';

import {CoursesProps} from '../../hooks/CoursesManager';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;

  background-color: #6548a3;
`;

export const ContainerMenu = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const HeaderMenu = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;

export const TitleMenu = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20px;
  color: #3d3d4c;
`;

export const TextCountCourses = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  color: #a0a0b2;
`;

export const CoursesList = styled(
  // @ts-ignore
  FlatList as new () => FlatList<CoursesProps>,
)``;
