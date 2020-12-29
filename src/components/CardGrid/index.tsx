import React from 'react';
import Card from '../Card';
import { useSpells } from '../../hooks/useSpells';
import { CardGridSection } from './cardGrid.styled';

type CardGridProps = {
  data: any;
};

type SpellData = {
  slug: string;
  name: string;
  level_int: number;
  range: string;
  casting_time: string;
  concentration: string;
  duration: string;
};

const CardGrid = ({ data }: CardGridProps) => {
  const [favouriteSpells, dispatchFavourite]: any = useSpells();

  return (
    <CardGridSection>
      {data.map((spell: SpellData) => {
        const isFavourite = favouriteSpells.includes(spell.slug);

        const onFavouriteClick = () => {
          if (isFavourite) {
            dispatchFavourite({ type: 'REMOVE_SPELL', spellId: spell.slug });
          } else {
            dispatchFavourite({ type: 'ADD_SPELL', spellId: spell.slug });
          }
        };

        return (
          <Card
            key={spell.slug}
            id={spell.slug}
            name={spell.name}
            level={spell.level_int}
            range={spell.range}
            casting={spell.casting_time}
            concentration={spell.concentration}
            duration={spell.duration}
            onFavouriteClick={onFavouriteClick}
            isFavourite={isFavourite}
          />
        );
      })}
    </CardGridSection>
  );
};

export default CardGrid;
