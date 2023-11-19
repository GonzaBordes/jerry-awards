import { useState, useEffect } from "react"
import QuestionCard from "../components/QuestionCard"
import Questions from "../data/QuizzQuestions"
import './QuizzView.css'
import {motion, AnimatePresence} from 'framer-motion'


const QuizView = () => { 
    const [step, setStep] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [timer, setTimer] = useState(150);
    const [totalTime, setTotalTime] = useState(0);

    const handleAnswer = (isCorrect) => {
        console.log(`Respuesta seleccionada: ${isCorrect ? "Correcta" : "Incorrecta"}`);
        if (isCorrect) {
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1)
        }
        setStep((prevStep) => prevStep + 1)
    }

    useEffect(() => {
        let interval;
      
        if (step < Questions.length && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1));
                setTotalTime((prevTotalTime) => prevTotalTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
      }, [timer]);
      
    return (
        <div className="px-5 mt-[3rem]">
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