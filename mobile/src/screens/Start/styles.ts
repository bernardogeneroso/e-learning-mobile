import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  background-color: #6548a3;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const ImageLearning = styled.Image``;

export const ImagePhone = styled.Image`
  position: absolute;
  top: 100px;
`;

export const Content = styled.View`
  padding: 32px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 25px;
  font-family: 'Rubik-Medium';
  font-weight: 400;
  font-size: 36px;
  color: #ff6680;
  line-height: 42px;
  width: 70%;
`;

export const Description = styled.Text`
  margin-bottom: 45px;
  color: #edebf5;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  width: 70%;
`;

export const ButtonGoStudy = styled.TouchableOpacity`
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: #ff6680;
  border-radius: 100px;
`;

export const ButtonGoStudyText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto-Medium';
`;
