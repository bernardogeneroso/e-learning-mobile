import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 210px;
  width: 100%;
  background-color: transparent;

  padding-top: ${getStatusBarHeight() + 12}px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageLogo = styled.Image`
  height: 24px;
`;

export const ContainerSearch = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  padding: 12px 20px 12px 20px;
`;

export const Input = styled.TextInput`
  flex-grow: 1;
  margin-left: 18px;
  color: #6548a3;
  font-family: 'Roboto-Regular';
`;
