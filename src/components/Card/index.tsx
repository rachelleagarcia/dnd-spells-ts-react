import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  name: string;
  onFavouriteClick: any;
  isFavourite: boolean;
}

const Card = ({ id, name, onFavouriteClick, isFavourite }: CardProps) => {
  return (
    <div>
      <button type="button" onClick={onFavouriteClick}>
        {isFavourite ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </button>
      <Link to={`/spells/${id}`}>
        <h2>{name}</h2>
        <span className="p-bottom font-sm highlight">
          Read more <i className="fas fa-arrow-right highlight font-sm"></i>
        </span>
      </Link>
    </div>
  );
};

export default Card;
