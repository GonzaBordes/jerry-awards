// Board.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
import imgGlobos from '../assets/img/globos.png';
import imgLogoWarner from '../assets/img/warner-logo.png';
import titleJerrys from '../assets/img/titulo-jerry.png'
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
      <div className='p-[4em]'>
        <img src={titleJerrys} alt="" className='titleJerrys flex mx-auto text-center'/>
        <h2 className='py-[30px] black fontSize-[40px]'>DASHBOARD JERRY´S</h2>
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