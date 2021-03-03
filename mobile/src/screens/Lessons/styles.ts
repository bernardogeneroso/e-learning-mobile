import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  background-color: #6548a3;
`;

export const ContainerLessons = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const HeaderLessons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LessonTitle = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 30px;
  color: #3d3d4c;
`;

export const LessonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerNoResult = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 40px;
`;

export const NoResultText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #3d3d4c;
`;
