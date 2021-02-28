import React, {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

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

interface DashBoardProps {
  courses?: CoursesProps[];
  saved?: boolean;
}

const DashBoard = ({courses, saved = false}: DashBoardProps) => {
  const {modalVisible} = useCourses();
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
          numColumns={2}
        />
      </ContainerMenu>

      <Modal modalVisible={modalVisible} />
    </Container>
  );
};

export default DashBoard;
