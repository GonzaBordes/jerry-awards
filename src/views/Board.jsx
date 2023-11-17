// Board.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
import ImgGlobos from '../assets/img/globos.png';
import ImgLogoWarner from '../assets/img/warner-logo.png';
//import titleJerrys from '../assets/img/titulo-jerry.png'
import TitleDashboard from '../components/TitleDashboard';
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
        <TitleDashboard />
        <ItemList data={data} />
      </div>
      <div className='img-board'>
        <img src={ImgGlobos} alt="" className='imgGlobos'/>
        <img src={ImgLogoWarner} alt="" className='imgWarner'/>
      </div>
    </div>
  );
};

export default Board