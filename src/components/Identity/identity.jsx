import React from 'react';

const Identity = ({ name, surname, age, trade }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
      <p>{trade}</p>

      <button>Telechargez mon CV</button>
      <button>Ecrivez-moi</button>
    </div>
  );
};

export default Identity;
