import React from "react";

import Header from "../../components/Header";
import CategoriesList from "../../components/CategoriesList";
import { useDisciplines } from "../../hooks/DisciplinesManager";

import { Container } from "./styles";

const Saves = () => {
  const { disciplinesSaved } = useDisciplines();

  return (
    <Container>
      <Header />

      <CategoriesList disciplines={disciplinesSaved} saved />
    </Container>
  );
};

export default Saves;
