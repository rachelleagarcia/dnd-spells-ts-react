import React from 'react';
import { DescriptionSection } from './description.styled';

type DescriptionProps = {
  desc: string;
  highLevel: string;
};

const Description = ({ desc, highLevel }: DescriptionProps) => {
  return (
    <DescriptionSection>
      <div>
        <h2>Description</h2>
        <p>{desc}</p>
        {highLevel ? (
          <p>
            <strong>At Higher Levels:</strong> {highLevel}
          </p>
        ) : null}
      </div>
    </DescriptionSection>
  );
};

export default Description;
