import React from 'react';
import { useParams } from 'react-router-dom';
import MainPageLayout from '../components/MainPageLayout';
import Attributes from '../components/Attributes';
import Description from '../components/Description';
import Header from '../components/Header';
import { useShowSpell } from '../hooks/useShowSpell';

const ShowSpell = () => {
  const { id } = useParams<{ id: string }>();
  const { spell, isLoading, error } = useShowSpell(id);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error occured: {error}</>;
  }

  return (
    <MainPageLayout>
      <div>
        <Header
          title={spell.name}
          level={spell.level}
          components={spell.components}
          range={spell.range}
          casting={spell.casting_time}
          duration={spell.duration}
          concentration={spell.concentration}
        />
        <Description desc={spell.desc} highLevel={spell.higher_level} />
        <Attributes
          material={spell.material}
          classes={spell.classes}
          school={spell.school.name}
        />
      </div>
    </MainPageLayout>
  );
};

export default ShowSpell;
