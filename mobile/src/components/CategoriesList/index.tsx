import React from 'react';
import {useWindowDimensions} from 'react-native';

import {DisciplinesProps, useDisciplines} from '../../hooks/DisciplinesManager';
import Categorie from './Categorie';
import Modal from './Modal';

import {
  Container,
  ContainerMenu,
  HeaderMenu,
  TitleMenu,
  TextCountCourses,
  DisciplinesList,
} from './styles';

interface DashBoardProps {
  disciplines?: DisciplinesProps[];
  saved?: boolean;
}

const DashBoard = ({disciplines, saved = false}: DashBoardProps) => {
  const {modalVisible} = useDisciplines();
  const {width: dimensionWindow} = useWindowDimensions();

  return (
    <Container>
      <ContainerMenu>
        <HeaderMenu>
          <TitleMenu>Categorias</TitleMenu>
          <TextCountCourses>
            {disciplines?.length ? disciplines?.length : 0} cursos
          </TextCountCourses>
        </HeaderMenu>

        <DisciplinesList
          data={disciplines}
          showsVerticalScrollIndicator={false}
          keyExtractor={(discipline: DisciplinesProps) => discipline.id}
          renderItem={({item: discipline}: {item: DisciplinesProps}) => (
            <Categorie
              discipline={discipline}
              dimensionWindow={dimensionWindow}
              saved={saved}
            />
          )}
          numColumns={2}
        />
      </ContainerMenu>

      <Modal modalVisible={modalVisible} />
    </Container>
  );
};

export default DashBoard;
