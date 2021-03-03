import React, {useMemo} from 'react';
import {useWindowDimensions, ActivityIndicator} from 'react-native';

import {CoursesProps, useCourses} from '../../hooks/CoursesManager';
import Categorie from './Categorie';
import Modal from './Modal';

import {
  Container,
  ContainerMenu,
  HeaderMenu,
  TitleMenu,
  TextCountCourses,
  CoursesList,
} from './styles';

import {
  ContainerNoResult,
  NoResultText,
  ContainerLoading,
} from '../../screens/Lessons/styles';

interface DashBoardProps {
  courses?: CoursesProps[];
  saved?: boolean;
}

const DashBoard = ({courses, saved = false}: DashBoardProps) => {
  const {modalVisible, loading} = useCourses();
  const {width: dimensionWindow} = useWindowDimensions();

  const handleCoursesCourses = useMemo(() => {
    if (!courses?.length) return;

    const courseLength = courses.length;

    return courseLength === 0
      ? 'Sem cursos'
      : courseLength === 1
      ? `${courseLength} curso`
      : `${courseLength} cursos`;
  }, [courses?.length]);

  return (
    <Container>
      <ContainerMenu>
        <HeaderMenu>
          <TitleMenu>Categorias</TitleMenu>
          <TextCountCourses>{handleCoursesCourses}</TextCountCourses>
        </HeaderMenu>

        {loading ? (
          <ContainerLoading>
            <ActivityIndicator size={46} animating color="#6548a3" />
          </ContainerLoading>
        ) : (
          <CoursesList
            data={courses}
            showsVerticalScrollIndicator={false}
            keyExtractor={(course: CoursesProps) => course.id}
            renderItem={({item: course}: {item: CoursesProps}) => (
              <Categorie
                course={course}
                dimensionWindow={dimensionWindow}
                saved={saved}
              />
            )}
            ListEmptyComponent={coursesNoResult}
            numColumns={2}
          />
        )}
      </ContainerMenu>

      <Modal modalVisible={modalVisible} />
    </Container>
  );
};

const coursesNoResult = () => {
  return (
    <ContainerNoResult>
      <NoResultText>Sem resultados!</NoResultText>
    </ContainerNoResult>
  );
};

export default DashBoard;
