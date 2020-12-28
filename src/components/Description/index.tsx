import React from 'react';

interface DescriptionProps {
  desc: string;
  highLevel: string;
}

const Description = ({ desc, highLevel }: DescriptionProps) => {
  return (
    <div>
      <div>
        <h2>Description</h2>
        <p>{desc}</p>
        {highLevel ? (
          <p>
            <strong>At Higher Levels:</strong> {highLevel}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Description;
