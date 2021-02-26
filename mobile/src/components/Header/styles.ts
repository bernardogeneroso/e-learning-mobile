import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface ContainerProps {
  classDashboard: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: ${(props) => (props.classDashboard ? 105 : 210)}px;
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
  height: 50px;
  padding: 2px 22px 2px 22px;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex-grow: 1;
  margin-left: 10px;
  color: #6548a3;
  font-family: 'Roboto-Regular';
`;
