import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  background-color: #6548a3;
`;

export const ContainerLesson = styled.View`
  flex: 1;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: #f0edf5;
`;

export const Information = styled.View``;

export const ContainerVideo = styled.TouchableOpacity`
  height: 220px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: #3d3d4c;
  justify-content: center;
  align-items: center;
`;

export const ContentLesson = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleLesson = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 30px;
  color: #3d3d4c;
`;

export const InfoLesson = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const NumberOfLessonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a0a0b2;
  margin-right: 22px;
`;

export const TimeLessonView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled.Text`
  margin-right: 4px;
`;

export const TimeText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a0a0b2;
`;

export const DescriptionLesson = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #6c6c80;
  margin-top: 16px;
  line-height: 25px;
`;

export const ContainerButtons = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonLeftText = styled.Text`
  margin-left: 8px;
  color: #ff6680;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const ButtonRight = styled.TouchableOpacity`
  flex-direction: row-reverse;
  align-items: center;
  background-color: #ff6680;
  padding: 16px 20px;
  border-radius: 30px;
`;

export const ButtonRightText = styled.Text`
  margin-right: 8px;
  color: #fff;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;
