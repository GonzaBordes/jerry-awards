// Board.jsx
import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../data/asyncMock';
import ItemList from '../components/ItemList/ItemList';
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
        <ItemList data={data} />
      </div>
    </div>
  );
};

export default Board