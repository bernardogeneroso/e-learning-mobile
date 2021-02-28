import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 16px;
  padding: 22px 20px 22px 65px;
  margin-left: 40px;
  position: relative;
`;

export const TitleLeasson = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  color: #6c6c80;
  height: 35px;
`;

export const InfoLeasson = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const GeralInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NumberOfLeassonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #c4c4d1;
  margin-right: 22px;
`;

export const TimeLeassonView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled.Text`
  margin-right: 4px;
`;

export const TimeText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #c4c4d1;
`;

export const LeassonCompleted = styled.View`
  background: #61c5bd;
  border-radius: 12px;
  padding: 4px 8px 4px 8px;
`;

export const LeassonCompletedText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 11px;
  color: #fff;
`;

export const ContainerVideoIcon = styled.View`
  position: absolute;
  left: -34px;
  top: 24px;
  height: 68px;
  width: 68px;
  background-color: #61c5bd;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
