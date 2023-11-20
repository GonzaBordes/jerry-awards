// Board.jsx
import { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
import imgGlobos from '../assets/img/globos.png';
import imgLogoWarner from '../assets/img/warner-logo.png';
import './Board.css'
import TitleDashboard from '../components/TitleDashboard';
import axios from "axios"

const Board = () => {
  const [data, setData] = useState([]);

  /*useEffect(() => {
    getUsuarios().then((users) => {
      setData(users);
    });
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('https://us-central1-kickads-airbyte.cloudfunctions.net/all')

        if(!response.data) {
          throw new Error('Error al traer los usuarios')
        }

        setData(response.data)
      } catch (error) {
        console.log('Error', error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='bg-black text-yellow board'>
      <div className='p-[4em]'>
        <TitleDashboard />
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