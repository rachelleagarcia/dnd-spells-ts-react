import React from 'react';
import { AttributesSection } from './attributes.styled';

type AttributesProps = {
  material: string;
  classes: [{}];
  school: string;
};

const Attributes = ({ material, classes, school }: AttributesProps) => {
  return (
    <AttributesSection>
      <h2>Attributes</h2>
      <table>
        <tbody>
          {material ? (
            <tr>
              <th>Materials</th>
              <td>{material}</td>
            </tr>
          ) : null}
          <tr>
            <th>Classes</th>
            <td>{classes.map((item: any) => item.name)}</td>
          </tr>
          <tr>
            <th>School</th>
            <td>{school}</td>
          </tr>
        </tbody>
      </table>
    </AttributesSection>
  );
};

export default Attributes;
