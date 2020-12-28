import React, { useEffect, useState } from 'react';
import CardGrid from '../components/CardGrid';
import MainPageLayout from '../components/MainPageLayout';
import Title from '../components/Title';
import { useSpells } from '../hooks/useSpells';
import { apiGet } from '../utils';

const Favourites = () => {
  const [favourited]: any = useSpells();

  const [spells, setSpells]: any = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favourited && favourited.length > 0) {
      const promises = favourited.map((spellId: string) =>
        apiGet(`spells/${spellId}`)
      );
      Promise.all(promises)
        .then((apiData) => apiData.map((spell) => spell))
        .then((results) => {
          setSpells(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [favourited]);

  return (
    <MainPageLayout>
      {isLoading && <div>Shows are still loading</div>}
      {error && <div>Error occured: {error}</div>}
      {!isLoading && !spells && (
        <Title title="No favourites added" highlight="yet" />
      )}
      {!isLoading && !error && spells && <CardGrid data={spells} />}
    </MainPageLayout>
  );
};

export default Favourites;
