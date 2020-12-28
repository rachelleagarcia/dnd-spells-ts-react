import React from 'react';
import Navbar from '../Navbar';
import { Main } from './main.styled';

const MainPageLayout: React.FC = ({ children }) => (
  <Main>
    <Navbar />
    {children}
  </Main>
);
export default MainPageLayout;
