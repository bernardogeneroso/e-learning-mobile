import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {DisciplinesProps, useDisciplines} from '../../hooks/DisciplinesManager';

import {
  Container,
  ContainerHeader,
  ImageLogo,
  ContainerSearch,
  ContainerInput,
  Input,
} from './styles';

import logo from '../../../assets/logo.png';

interface HeaderProps {
  discipline?: DisciplinesProps;
  classDashboard?: boolean;
}

const Header = ({discipline, classDashboard = false}: HeaderProps) => {
  const navigation = useNavigation();
  const {addFavorite, removeFavorite, checkIfIsFavorite} = useDisciplines();

  const [inputSearch, setInputSearch] = useState<string>('');
  const [heartSelected, setHeartSelected] = useState<boolean>(() => {
    return discipline ? checkIfIsFavorite(discipline?.id) : false;
  });

  const handleToggleHeartSelected = useCallback(() => {
    setHeartSelected((state) => !state);
  }, []);

  return (
    <Container classDashboard>
      <ContainerHeader>
        {classDashboard ? (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconFeather name="arrow-left" size={22} color="#FF6680" />
            </TouchableOpacity>

            <ImageLogo source={logo} width={120} />

            {heartSelected ? (
              <TouchableOpacity
                onPress={() => {
                  handleToggleHeartSelected();
                  discipline && removeFavorite(discipline);
                }}>
                <IconAntDesign name="heart" size={22} color="#FF6680" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleToggleHeartSelected();
                  discipline && addFavorite(discipline);
                }}>
                <IconFeather name="heart" size={22} color="#FF6680" />
              </TouchableOpacity>
            )}
          </>
        ) : (
          <>
            <ImageLogo source={logo} width={120} />

            <TouchableOpacity>
              <IconFeather name="power" size={22} color="#FF6680" />
            </TouchableOpacity>
          </>
        )}
      </ContainerHeader>

      {!classDashboard && (
        <ContainerSearch>
          <ContainerInput>
            <IconFeather name="search" size={22} color="#C4C4D1" />

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
      )}
    </Container>
  );
};

export default Header;
