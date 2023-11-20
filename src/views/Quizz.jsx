import "./Quizz.css"
import preguntas from '../data/QuizzQuestions'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import QuizView from "./QuizView"
import Questions from "../components/Questions"
import Header from "../components/Header"
import MainContentWrapper from "../components/MainContentWrapper"

const Quizz = () => {

  const [loggedUser, setLoggedUser] = useState(false)
  const [userData, setUserData] = useState({ nombre: '', dni: '', mesa: '', email: '' });
  const [userId, setuserId] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };  

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(userData))

    // Realizar la solicitud POST a la API con Axios
    axios.post('https://us-central1-kickads-airbyte.cloudfunctions.net/create_jerry_users', userData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => {
        console.log('Usuario creado');
        console.log(response.data);
        setuserId(response.data)
        setLoggedUser(true);        
      })
      .catch(error => {
        console.error('Error de red:', error);
      });  
  };

  return (
    <MainContentWrapper>
          <AnimatePresence mode="wait">
            {!loggedUser ? (

              <motion.section id="register" className="px-5"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              >
                <div className="container">
                  <h3 className="text-yellow bold uppercase text-center mb-3">Respondé la trivia en el menor tiempo posible y ganá</h3>
                  <span className="block text-yellow uppercase text-center mb-6 font-light">Primer premio smart tv philco led 43" full h</span>

                  <div className="form-wrapper pt-6  border-t-[.5px] border-yellow">
                    <form className="grid gap-3">

                      <div className="input-box">
                        <label htmlFor="nombre-apellido" className="text-yellow block text-center uppercase font-light text-[.9rem]">Nombre y apellido</label>
                        <input type="text" name="nombre" onChange={handleChange} id="nombre-apellido" className="w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />
                      </div>
                      <div className="input-box">
                        <label htmlFor="email" className="text-yellow block text-center uppercase font-light text-[.9rem] ">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                      </div>
                      <div className="flex gap-6">
                        <div className="input-box">
                          <label htmlFor="dni" className="text-yellow block text-center uppercase font-light text-[.9rem]">Dni</label>
                          <input type="text" name="dni" id="dni" onChange={handleChange} className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                        </div>
                        <div className="input-box">
                          <label htmlFor="table" className="text-yellow block text-center uppercase font-light text-[.9rem]">Mesa</label>
                          <input type="number" id="mesa" name="mesa" onChange={handleChange} className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                        </div>                
                      </div>
                      <button onClick={handleRegister} className="text-yellow border-2 border-yellow py-3 w-full font-bold text-[1.1rem] uppercase rounded-xl mt-4">Registrarme y jugar</button>
                    </form>

                    <span className="text-[.9rem] text-light text-yellow text-center block my-5">Tenés tiempo hasta las xxxx</span>

                  </div>
                </div>              
              </motion.section>
                
            ) : (
              
              <QuizView userId={userId}/>
              
            )}
          </AnimatePresence>                 
    </MainContentWrapper>
  )
}

export default Quizz