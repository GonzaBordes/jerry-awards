// Board.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
import imgGlobos from '../assets/img/globos.png';
import globosCompletos from '../assets/img/globos.png';
import imgLogoWarner from '../assets/img/warner-logo.png';
import titleJerrys from '../assets/img/titulo-jerry.png'
import Header from '../components/Header';
import {motion} from 'framer-motion'
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
      {/* <img src={globosCompletos} className="w-[15rem] rotate-[180deg] absolute right-[-2rem] top-[-5rem]" alt="" /> */}
      <div className='p-[4em]'>
        <Header />
        <h2 className='py-[30px] black fontSize-[40px]'>DASHBOARD</h2>
        <ItemList data={data} />
      </div>
      <div className='img-board flex items-center'>
        <img  src={imgGlobos} alt="" className='imgGlobos w-[15rem]'/>
        <img src={imgLogoWarner}  alt="" className='w-[15rem] mr-[7vw] imgWarner'/>
      </div>
    </div>
  );
};

export default Board