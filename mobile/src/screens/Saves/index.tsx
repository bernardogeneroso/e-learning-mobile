import React from 'react';

import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';
import {useCourses} from '../../hooks/CoursesManager';

import {Container} from './styles';

const Saves = () => {
  const {coursesSaved} = useCourses();

  return (
    <Container>
      <Header />

      <CategoriesList courses={coursesSaved} saved />
    </Container>
  );
};

export default Saves;
