import "./Quizz.css"
import preguntas from '../data/QuizzQuestions'
import {motion, AnimatePresence} from 'framer-motion'
import { useState, useRef } from "react"
import axios from "axios"
import QuizView from "./QuizView"
import Header from "../components/Header"
import MainContentWrapper from "../components/MainContentWrapper"
import TerminosCondiciones from '../assets/tyc_trivia_jerry.pdf'

const Quizz = () => {

  const [loggedUser, setLoggedUser] = useState(false)
  const [userData, setUserData] = useState({ nombre: '', dni: '', mesa: '', email: '' });
  const [userId, setuserId] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };  
  const [loggedUser, setLoggedUser] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [error, setError] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(userData))

    // Realizar la solicitud POST a la API con Axios
    axios.post('https://us-central1-kickads-airbyte.cloudfunctions.net/create_jerry_users', userData, {

    if (!checkboxChecked) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }
  
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

  const handleTermsClick = () => {
    // Descargar el PDF al hacer clic en el enlace
    window.open(TerminosCondiciones, "_blank");
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
                  <span className="block text-yellow uppercase text-center mb-3 font-light">Primer premio smart tv philco led 43" full h</span>

                  <div className="form-wrapper pt-4  border-t-[.5px] border-yellow">
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
                      <div className="flex justify-center pt-2 pb-1">
                        <input
                          type="checkbox"
                          className="mr-3"
                          id="termsCheckbox"
                          checked={checkboxChecked}
                          onChange={() => setCheckboxChecked(!checkboxChecked)}
                        />
                        <label htmlFor="termsCheckbox" className="text-[.9rem] text-light text-yellow text-center block">
                          Acepto los{" "}
                          <a
                            href="#"
                            target="_blank"
                            className="text-yellow bold underline"
                            onClick={handleTermsClick}
                          >
                            términos y condiciones
                          </a>
                        </label>
                      </div>
                      {error && <motion.div
                                  initial={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.5 }} 
                                  className="text-yellow text-[.9rem] text-center">
                                    {error}
                                </motion.div>}
                      <button onClick={handleRegister} className="text-yellow border-2 border-yellow py-3 w-full font-bold text-[1.1rem] uppercase rounded-xl mt-2">Registrarme y jugar</button>
                    </form>

                  

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