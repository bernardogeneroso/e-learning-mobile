import styled from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";

import { CategoriesProps } from "./index";

interface CategorieContentProps {
  widthWindows: number;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

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
  font-family: "RubikRegular";
  font-size: 20px;
  color: #3d3d4c;
`;

export const TextCountCourses = styled.Text`
  font-family: "RubikRegular";
  font-size: 15px;
  color: #a0a0b2;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<CategoriesProps>
)``;

export const CategorieContent = styled.View<CategorieContentProps>`
  padding: 18px;
  background: #fff;
  width: ${(props) => props.widthWindows / 2};
  height: 100px;
  margin-top: 10px;
  justify-content: center;
  border-radius: 20px;
`;

export const TitleCategorie = styled.Text`
  font-family: "RubikRegular";
  color: #6c6c80;
  font-size: 15px;
`;

export const TextClasses = styled.Text`
  font-family: "RubikRegular";
  color: #c4c4d1;
  font-size: 10px;
`;
