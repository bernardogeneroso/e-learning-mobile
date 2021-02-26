import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';

import {ClassesProps} from './index';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  background-color: #6548a3;
`;

export const ContainerClass = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const HeaderClass = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ClassTitle = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 30px;
  color: #3d3d4c;
`;

export const ClassesText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
`;
