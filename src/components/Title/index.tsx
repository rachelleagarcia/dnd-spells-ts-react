import React from 'react';

interface TitleProps {
  styles: string;
  title: string;
  highlight: string;
}

const Title = ({ styles, title, highlight }: TitleProps) => {
  return (
    <div className="center">
      <h1 className={styles}>{title}</h1>
      <h1 className="highlight inline">{highlight}</h1>
    </div>
  );
};

export default Title;
