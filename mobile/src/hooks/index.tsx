import React from "react";

import { DisciplinesProvider } from "./DisciplinesManager";

const AppProvider: React.FC = ({ children }) => (
  <DisciplinesProvider>{children}</DisciplinesProvider>
);

export default AppProvider;
