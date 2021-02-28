import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import CategoriesList from '../../components/CategoriesList';
import Header from '../../components/Header';
import {useCourses} from '../../hooks/CoursesManager';

import {Container} from './styles';

export interface CategoriesProps {
  id: string;
  name: string;
  classes_number: string;
}

const DashBoard = () => {
  const {courses} = useCourses();

  return (
    <Container>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Header />

        <CategoriesList courses={courses} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default DashBoard;
