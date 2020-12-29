import React from 'react';
import { SpellItems } from './header.styled';

type HeaderProps = {
  title: string;
  level: number;
  components: string;
  range: string;
  casting: string;
  duration: string;
  concentration: string;
};

const Header = ({
  title,
  level,
  components,
  range,
  casting,
  duration,
  concentration,
}: HeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <SpellItems>
        <div>
          <span>Level {level}</span>
        </div>
        <div>
          <span>{components}</span>
        </div>
        <div>
          <i className="fas fa-people-arrows"></i>
          <span className="m-1">{range}</span>
        </div>
        <div>
          <i className="fas fa-hourglass-half"></i>
          <span className="m-1">{casting}</span>
        </div>
        <div>
          {concentration === 'yes' ? (
            <i className="fas fa-copyright"></i>
          ) : (
            <i className="far fa-clock"></i>
          )}
          <span className="m-1">{duration.split('Up to')}</span>
        </div>
      </SpellItems>
    </>
  );
};

export default Header;
