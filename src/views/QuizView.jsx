import { useState, useEffect } from "react"
import QuestionCard from "../components/QuestionCard"
import Questions from "../data/QuizzQuestions"
import './QuizzView.css'
import {motion, AnimatePresence} from 'framer-motion'


const QuizView = () => { 

    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [step, setStep] = useState(0)
    const [timer, setTimer] = useState(15);
    const [totalTime, setTotalTime] = useState(0);


    const handleAnswer = (isCorrect) => {
        console.log(`Respuesta seleccionada: ${isCorrect ? "Correcta" : "Incorrecta"}`);
        if (isCorrect) {
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1)
        }
        setStep((prevStep) => prevStep + 1)
        setTimer(15)
    }

    useEffect(() => {
        // Configura el temporizador para cada pregunta
        const temporizador = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
          setTotalTime(totalTime + 1); // Incrementa el tiempo total
        } else {
          // Cuando se llega a 0, pasa a la siguiente pregunta
          setStep(step + 1);
          setTimer(15); // Reinicia el temporizador para la siguiente pregunta
        }
      }, 1000);
      
      if (step === Questions.length) {
        clearInterval(temporizador);
      }

        return () => clearInterval(temporizador);
      }, [timer,step, totalTime]);

      let displayeTimer = timer < 10 ? `0${timer}` : timer;
      
    return (
        <div className="px-5 mt-[3rem]">
            {step !== Questions.length
             ? 
             (<p className="text-[white] text-[1.5rem] bold  text-right pb-3">00:{displayeTimer}</p>)
             : 
             null
             }
            <AnimatePresence mode="wait">
                {step < Questions.length ? (
                    <motion.div
                        key={step} // Cambiar el valor de 'key' al cambiar la pregunta
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <QuestionCard
                        step={step}
                        question={Questions[step]}
                        handleAnswer={handleAnswer}
                        />
                    </motion.div>                
                ) : (
                    <motion.div
                    className="pt-[4rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5, delay: .5 }}
                    >
                        <h2 className="text-center text-yellow light text-2xl italic mb-2">Nombre y Apellido</h2>
                        <div className="grid place-content-center text-center">
                            <span className="bold text-md text-yellow">Respondiste</span>
                            <span className="block overflow-hidden">
                                <motion.span className="block text-yellow bold text-[6rem]"
                                
                                initial={{ y: '100%' }}
                                animate={{ y:'0%'}}
                                transition={{ duration: 0.5, delay: .7 }}
                                >
                                    {correctAnswers}
                                </motion.span>
                            </span>                             
                            <span className="block text-yellow">preguntas correctas</span>
                        </div>
                        <span className="block text-[white] text-center">Tiempo total empleado: {totalTime} segundos</span>
                    </motion.div>
                )}
            </AnimatePresence>            
        </div>
    )
}

export default QuizView