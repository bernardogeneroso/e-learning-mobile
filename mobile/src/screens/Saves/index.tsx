import React from "react";

import Header from "../../components/Header";
import CategoriesList from "../../components/CategoriesList";

import { Container } from "./styles";

const Saves = () => {
  return (
    <Container>
      <Header />

      <CategoriesList />
    </Container>
  );
};

export default Saves;
