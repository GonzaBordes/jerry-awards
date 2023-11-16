// Board.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
import imgGlobos from '../assets/img/globos.png';
import imgLogoWarner from '../assets/img/warner-logo.png';
import './Board.css'


const Board = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsuarios().then((users) => {
      setData(users);
    });
  }, []);

  return (
    <div className='bg-black text-yellow board'>
      <div>
        <h2>DASHBOARD JERRY´S</h2>
        <ItemList data={data} />
      </div>
      <div className='img-board'>
        <img src={imgGlobos} alt="" className='imgGlobos'/>
        <img src={imgLogoWarner} alt="" className='imgWarner'/>
      </div>
    </div>
  );
};

export default Board