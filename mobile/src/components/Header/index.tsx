import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {CoursesProps, useCourses} from '../../hooks/CoursesManager';

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
  course?: CoursesProps;
  courseDashboard?: boolean;
}

const Header = ({course, courseDashboard = false}: HeaderProps) => {
  const navigation = useNavigation();
  const {addFavorite, removeFavorite, checkIfIsFavorite} = useCourses();

  const [inputSearch, setInputSearch] = useState<string>('');
  const [heartSelected, setHeartSelected] = useState<boolean>(() => {
    return course ? checkIfIsFavorite(course?.id) : false;
  });

  const handleToggleHeartSelected = useCallback(() => {
    setHeartSelected((state) => !state);
  }, []);

  return (
    <Container classDashboard>
      <ContainerHeader>
        {courseDashboard ? (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconFeather name="arrow-left" size={22} color="#FF6680" />
            </TouchableOpacity>

            <ImageLogo source={logo} width={120} />

            {heartSelected ? (
              <TouchableOpacity
                onPress={() => {
                  handleToggleHeartSelected();
                  course && removeFavorite(course);
                }}>
                <IconAntDesign name="heart" size={22} color="#FF6680" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleToggleHeartSelected();
                  course && addFavorite(course);
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

      {!courseDashboard && (
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
