import React from 'react';
import Card from '../Card';
import { useSpells } from '../../hooks/useSpells';

interface CardGridProps {
  data: any;
}

const CardGrid = ({ data }: CardGridProps) => {
  const [favouriteSpells, dispatchFavourite]: any = useSpells();

  return (
    <div>
      {data.map((item: any) => {
        const isFavourite = favouriteSpells.includes(item.index);

        const onFavouriteClick = () => {
          if (isFavourite) {
            dispatchFavourite({ type: 'REMOVE_SPELL', spellId: item.index });
          } else {
            dispatchFavourite({ type: 'ADD_SPELL', spellId: item.index });
          }
        };

        return (
          <Card
            key={item.index}
            id={item.index}
            name={item.name}
            onFavouriteClick={onFavouriteClick}
            isFavourite={isFavourite}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;