import React from 'react';

interface AttributesProps {
  material: string;
  classes: [{}];
  school: string;
}

const Attributes = ({ material, classes, school }: AttributesProps) => {
  return (
    <div>
      <h2>Attributes</h2>
      <table>
        <tbody>
          {material ? (
            <tr>
              <td>Materials</td>
              <td>{material}</td>
            </tr>
          ) : null}
          <tr>
            <td>Classes</td>
            <td>{classes.map((item: any) => item.name)}</td>
          </tr>
          <tr>
            <td>School</td>
            <td>{school}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
