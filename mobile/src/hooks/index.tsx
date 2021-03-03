import React from 'react';

import {CoursesProvider} from './CoursesManager';
import {LessonsProvider} from './LessonsManager';

const AppProvider: React.FC = ({children}) => (
  <CoursesProvider>
    <LessonsProvider>{children}</LessonsProvider>
  </CoursesProvider>
);

export default AppProvider;
