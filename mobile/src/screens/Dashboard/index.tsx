import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import CategoriesList from "../../components/CategoriesList";
import Header from "../../components/Header";
import { useDisciplines } from "../../hooks/DisciplinesManager";

import { Container } from "./styles";

export interface CategoriesProps {
  id: string;
  name: string;
  classes_number: string;
}

const DashBoard = () => {
  const { disciplines } = useDisciplines();

  return (
    <Container>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Header />

        <CategoriesList disciplines={disciplines} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default DashBoard;
