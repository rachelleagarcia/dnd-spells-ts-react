import React from 'react';
import { TitleHeader } from './title.styled';

type TitleProps = {
  title: string;
  highlight: string;
};

const Title = ({ title, highlight }: TitleProps) => {
  return (
    <TitleHeader>
      <h1>{title}</h1>
      <h2>{highlight}</h2>
    </TitleHeader>
  );
};

export default Title;
