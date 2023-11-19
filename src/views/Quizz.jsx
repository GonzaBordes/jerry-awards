import "./Quizz.css"
import preguntas from '../data/QuizzQuestions'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState, useRef } from "react"
import QuizView from "./QuizView"
import Questions from "../components/Questions"
import Header from "../components/Header"
import MainContentWrapper from "../components/MainContentWrapper"

const Quizz = () => {

  const [loggedUser, setLoggedUser] = useState(false)
  const [user_id, setUserId] = useState(null)
  let userId = ''
  const userData = {
    nombre: '',
    dni: '',
    mesa: '',
    email: '',
    id: ''
  }

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Obtener los valores del formulario
    const name = document.getElementById('nombre-apellido').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('dni').value;
    const mesa = document.getElementById('table').value;
  
    // Crear el objeto de datos a enviar
    const userData = {
      name,
      email,
      dni,
      mesa,
    };

    console.log(userData)
  
    // Realizar la solicitud POST a la API
    fetch('https://us-central1-kickads-airbyte.cloudfunctions.net/create_user', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData
      }),
    })
      .then(response => {
        setLoggedUser(true)
        response.json()
      })
      .then(data => {
        console.log('Usuario creado')
        console.log(data)
        setLoggedUser(true);
      })
      .catch((err) => {
        console.error('Error de red:', err);
      });
  };

  return (
    <MainContentWrapper>
          <AnimatePresence mode="wait">
            {!loggedUser ? (
              // Si el usuario está autenticado, renderiza el formulario
              <motion.section id="register" className="px-5"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              >
                <div className="container">
                  <h3 className="text-yellow bold uppercase text-center mb-3">Respondé la trivia en el menor tiempo posible y ganá</h3>
<<<<<<< HEAD
                  <span className="block text-yellow uppercase text-center mb-6 font-light">Primer premio smart tv philco led 43" full h</span>
=======
                  <span className="block text-yellow uppercase text-center mb-8 font-light">Primer premio smart tv philco led 43" full hd</span>
>>>>>>> fdf56a8b82f66f9207d531897b975ad35e60a896

                  <div className="form-wrapper pt-6  border-t-[.5px] border-yellow">
                    <form className="grid gap-3">

                      <div className="input-box">
                        <label htmlFor="nombre-apellido" className="text-yellow block text-center uppercase font-light text-[.9rem]">Nombre y apellido</label>
                        <input type="text" name="nombre-apellido" id="nombre-apellido" className="w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />
                      </div>
                      <div className="input-box">
                        <label htmlFor="email" className="text-yellow block text-center uppercase font-light text-[.9rem] ">Email</label>
                        <input type="email" name="email" id="email" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                      </div>
                      <div className="flex gap-6">
                        <div className="input-box">
                          <label htmlFor="dni" className="text-yellow block text-center uppercase font-light text-[.9rem]">Dni</label>
                          <input type="text" name="dni" id="dni" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                        </div>
                        <div className="input-box">
                          <label htmlFor="table" className="text-yellow block text-center uppercase font-light text-[.9rem]">Mesa</label>
                          <input type="number" id="table" name="table" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                        </div>                
                      </div>
                      <button onClick={handleRegister} className="text-yellow border-2 border-yellow py-3 w-full font-bold text-[1.1rem] uppercase rounded-xl mt-4">Registrarme y jugar</button>
                    </form>

                    <span className="text-[.9rem] text-light text-yellow text-center block my-5">Tenés tiempo hasta las xxxx</span>

                  </div>
                </div>              
              </motion.section>
                
            ) : (
              // Si el usuario no está autenticado, renderiza un div con la clase "div"
              <QuizView />
              
            )}
          </AnimatePresence>                 
    </MainContentWrapper>
  )
}

export default Quizz