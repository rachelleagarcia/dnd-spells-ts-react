import React from 'react';
import Navbar from '../Navbar';

const MainPageLayout: React.FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
export default MainPageLayout;
