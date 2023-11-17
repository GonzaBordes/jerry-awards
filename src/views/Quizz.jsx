import "./Quizz.css"
import globos from '../assets/img/globos.png'
import globosCompletos from '../assets/img/globos-completos.png'
import warnerLogo from '../assets/img/warner-logo.png'
import preguntas from '../data/QuizzQuestions'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState, useRef } from "react"
import Questions from "../components/Questions"
import Header from "../components/Header"

const Quizz = () => {

  const [loggedUser, setLoggedUser] = useState(false)
  let userId = ''
  let userData = {
    nombre: '',
    dni: '',
    mesa: '',
    email: '',
    id: ''
  }



  const handleRegister = (e) => {
    e.preventDefault()
    userData.mesa = document.getElementById('mesa').value
    userData.nombre = document.getElementById('nombre-apellido').value
    userData.email = document.getElementById('email').value
    userData.dni = document.getElementById('dni').value
    userData.id = '#!dDF123SD'
    setLoggedUser(true)
  }

  return (
    <>
        <main className="bg-black pt-[5rem] pb-[9rem] relative  min-h-[110vh] overflow-hidden">
        <img src={globosCompletos} className="w-[20rem] absolute right-[-4rem] top-[-12rem]" alt="" />
          <motion.section id="register" className="px-5">
            <Header />
            <div className="container">
              <h3 className="text-yellow bold uppercase text-center mb-3">Respondé la trivia en el menor tiempo posible y ganá</h3>
              <span className="block text-yellow uppercase text-center mb-8 font-light">Primer premio smart tv philco led 43" full h</span>

              <div className="form-wrapper pt-8  border-t-[.5px] border-yellow">
                <form className="grid gap-6">

                  <div className="input-box">
                    <label htmlFor="nombre-apellido" className="text-yellow block text-center uppercase font-light text-[.9rem]">Nombre y apellido</label>
                    <input type="text" name="nombre-apellido" id="nombre-apellido" className="w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />
                  </div>
                  <div className="input-box">
                    <label htmlFor="nombre-apellido" className="text-yellow block text-center uppercase font-light text-[.9rem] ">Email</label>
                    <input type="email" name="email" id="email" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                  </div>
                  <div className="flex gap-6">
                    <div className="input-box">
                      <label htmlFor="dni" className="text-yellow block text-center uppercase font-light text-[.9rem]">Dni</label>
                      <input type="text" name="dni" id="dni" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                    </div>
                    <div className="input-box">
                      <label htmlFor="nombre-apellido" className="text-yellow block text-center uppercase font-light text-[.9rem]">Mesa</label>
                      <input type="number" id="table" name="table" className="text-[.9rem] w-full py-[.5rem] px-2 mt-3 rounded-lg border-yellow border-2 bg-white" />   
                    </div>                
                  </div>
                  <button onClick={handleRegister} className="text-yellow border-2 border-yellow py-3 w-full font-bold text-[1.3rem] uppercase rounded-xl mt-4">Registrarme y jugar</button>
                </form>

                <span className="text-[.9rem] text-light text-yellow text-center block my-5">Tenés tiempo hasta las xxxx</span>

              </div>

            </div>
            
          </motion.section>
          <footer className="w-full absolute bottom-0 flex justify-between items-center">
            <img src={globos} className="w-[8rem]" alt="" />
            <img src={warnerLogo} alt="" className="h-[3rem] pr-3"/>
          </footer>
          
        </main>

    </>
  )
}

export default Quizz