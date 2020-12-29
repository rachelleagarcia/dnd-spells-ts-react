import React from 'react';
import { Link } from 'react-router-dom';
import { SpellCard, SpellItem, SpellLevel } from './card.styled';

type CardProps = {
  id: string;
  name: string;
  level: number;
  range: string;
  casting: string;
  concentration: string;
  duration: string;
  onFavouriteClick: () => void;
  isFavourite: boolean;
};

const Card = ({
  id,
  name,
  level,
  range,
  casting,
  concentration,
  duration,
  onFavouriteClick,
  isFavourite,
}: CardProps) => {
  return (
    <SpellCard>
      <button type="button" onClick={onFavouriteClick}>
        {isFavourite ? (
          <i className="fas fa-heart icon"></i>
        ) : (
          <i className="far fa-heart icon"></i>
        )}
      </button>
      <Link to={`/spells/${id}`}>
        <h2>{name}</h2>
        <SpellLevel>{level === 0 ? 'C' : level}</SpellLevel>
        <div className="spell-props">
          <SpellItem>
            <i className="fas fa-people-arrows icon-a"></i>
            <span>{range}</span>
          </SpellItem>
          <SpellItem>
            <i className="fas fa-hourglass-half icon-a"></i>
            {casting === '1 bonus action' ? (
              <span>1 bonus</span>
            ) : (
              <span>{casting.split(',')[0]}</span>
            )}
          </SpellItem>
          {concentration === 'yes' ? (
            <SpellItem>
              <i className="fas fa-copyright icon-a"></i>
              <span>{duration.split('Up to')}</span>
            </SpellItem>
          ) : null}
        </div>
        <div className="inline">
          <span className="highlight">Read more</span>
          <i className="fas fa-arrow-right highlight"></i>
        </div>
      </Link>
    </SpellCard>
  );
};

export default Card;
