import React from 'react';

import {CoursesProvider} from './CoursesManager';

const AppProvider: React.FC = ({children}) => (
  <CoursesProvider>{children}</CoursesProvider>
);

export default AppProvider;
