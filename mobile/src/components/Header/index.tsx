import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerHeader,
  ImageLogo,
  ContainerSearch,
  ContainerInput,
  Input,
} from './styles';

import logo from '../../../assets/logo.png';

const Header = () => {
  const [inputSearch, setInputSearch] = useState<string>('');

  return (
    <Container>
      <ContainerHeader>
        <ImageLogo source={logo} width={120} />

        <TouchableOpacity>
          <Icon name="power" size={22} color="#FF6680" />
        </TouchableOpacity>
      </ContainerHeader>

      <ContainerSearch>
        <ContainerInput>
          <Icon name="search" size={22} color="#C4C4D1" />

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
