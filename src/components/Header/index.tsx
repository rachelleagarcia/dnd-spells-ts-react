import React from 'react';

interface HeaderProps {
  title: string;
  level: number;
  components: string;
  range: string;
  casting: string;
  duration: string;
  concentration: string;
}

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
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          <span className="center">Level {level}</span>
        </div>
        <div>
          <span className="center">{components}</span>
        </div>
        <div>
          <i className="fas fa-people-arrows"></i>
          <span className="p-3">{range}</span>
        </div>
        <div>
          <i className="fas fa-hourglass-half"></i>
          <span className="p-3">{casting}</span>
        </div>
        <div>
          {concentration ? (
            <span className="invert">C</span>
          ) : (
            <i className="far fa-clock p-2"></i>
          )}
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
