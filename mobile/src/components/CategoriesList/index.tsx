import React, { useState } from "react";
import { Dimensions } from "react-native";

import {
  Container,
  ContainerMenu,
  HeaderMenu,
  TitleMenu,
  TextCountCourses,
  CategoriesList,
  CategorieContent,
  TitleCategorie,
  TextClasses,
} from "./styles";

export interface CategoriesProps {
  id: string;
  name: string;
  classes_number: string;
}

const categories = [
  {
    id: "rgjgekigjerkjgkreskgre",
    name: "Matemática",
    classes_number: 16,
  },
  {
    id: "343434234gerrrge",
    name: "Física",
    classes_number: 25,
  },
  {
    id: "egreegergegre",
    name: "Inglês",
    classes_number: 6,
  },
  {
    id: "ghtrhrth57654",
    name: "Química",
    classes_number: 61,
  },
  {
    id: "htrhtrhrthrthrth",
    name: "História",
    classes_number: 28,
  },
  {
    id: "htrhtrh223rthrthrth",
    name: "História",
    classes_number: 28,
  },
  {
    id: "32332342gtrgtr",
    name: "História",
    classes_number: 28,
  },
  {
    id: "gtrgrrtgrtg",
    name: "História",
    classes_number: 28,
  },
  {
    id: "htrhtrhrthtrhtrhrthrthhrthrth",
    name: "História",
    classes_number: 28,
  },
];

interface Props {
  data?: CategoriesProps[];
}

const DashBoard = ({ data }: Props) => {
  const [dimensionWindow] = useState(Dimensions.get("window").width);

  return (
    <Container>
      <ContainerMenu>
        <HeaderMenu>
          <TitleMenu>Categorias</TitleMenu>
          <TextCountCourses>43 cursos</TextCountCourses>
        </HeaderMenu>

        <CategoriesList
          // @ts-ignore
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(categorie) => categorie.id}
          renderItem={({ item: categorie }) => (
            <CategorieContent
              style={{
                marginHorizontal: 5,
              }}
              widthWindows={dimensionWindow - 60}
            >
              <TitleCategorie>{categorie.name}</TitleCategorie>
              <TextClasses>{categorie.classes_number} Aulas</TextClasses>
            </CategorieContent>
          )}
          numColumns={2}
        />
      </ContainerMenu>
    </Container>
  );
};

export default DashBoard;
