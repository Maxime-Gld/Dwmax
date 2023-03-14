import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Identity from '../../components/Identity/Identity';
import data_Identity from '../../datas/About';
import avatar from '../../assets/images/DWMaxAvatar.png';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(data_Identity);
  }, []);

  const { name, surname, age, trade } = data;
  return (
    <section>
      <div>
        <img src={avatar} alt="Avatar" />
        <Identity name={name} surname={surname} age={age} trade={trade} />
      </div>
      <div>
        <Card clasname="left" />
        <Card classname="middle" />
        <Card classname="right" />
      </div>
    </section>
  );
};

export default Home;
