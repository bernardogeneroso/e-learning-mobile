import styled from 'styled-components/native';
import {Modal as ModalComponent} from 'react-native';

export const Modal = styled(ModalComponent)``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const Dialog = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 16px;
  padding: 45px 55px 45px 55px;
  align-items: center;
`;

export const TextInfo = styled.Text`
  width: 155px;
  text-align: center;
  margin-top: 28px;
  font-size: 15px;
  font-family: 'Rubik-Regular';
  color: #6c6c80;
`;

export const ActionsButtons = styled.View`
  margin-top: 26px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonClose = styled.TouchableWithoutFeedback``;

export const ButtonRemove = styled.TouchableWithoutFeedback``;

export const ButtonCloseText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ff6680;
  margin-right: 22px;
`;

export const ButtonRemoveText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #fff;
  background-color: #ff6680;
  border-radius: 20px;
  padding: 10px 18px 10px 18px;
  overflow: hidden;
`;
