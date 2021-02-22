import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  ContainerHeader,
  ImageLogo,
  ContainerSearch,
  ContainerInput,
  Input,
} from "./styles";

import logo from "../../../assets/logo.png";

const Header = () => {
  const [inputSearch, setInputSearch] = useState<string>("");

  return (
    <Container>
      <ContainerHeader>
        <ImageLogo source={logo} width={120} />

        <TouchableOpacity>
          <Feather name="power" size={22} color="#FF6680" />
        </TouchableOpacity>
      </ContainerHeader>

      <ContainerSearch>
        <ContainerInput>
          <Feather name="search" size={22} color="#C4C4D1" />

          <Input
            keyboardAppearance="default"
            placeholder="Pesquise um curso"
            placeholderTextColor="#C4C4D1"
            defaultValue={inputSearch}
            onChangeText={(value) => {
              setInputSearch(value);
            }}
          />
        </ContainerInput>
      </ContainerSearch>
    </Container>
  );
};

export default Header;
