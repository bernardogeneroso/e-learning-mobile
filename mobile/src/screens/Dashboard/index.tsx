import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import CategoriesList from "../../components/CategoriesList";

import Header from "../../components/Header";

import { Container } from "./styles";

export interface CategoriesProps {
  id: string;
  name: string;
  classes_number: string;
}

const DashBoard = () => {
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

        <CategoriesList />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default DashBoard;
