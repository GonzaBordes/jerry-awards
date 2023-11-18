import { useState, useEffect } from "react"
import QuestionCard from "../components/QuestionCard"
import Questions from "../data/QuizzQuestions"
import './QuizzView.css'


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
        <div>
            {step < Questions.length ? (
                <QuestionCard
                    question={Questions[step]}
                    handleAnswer={handleAnswer}
                />
            ) : (
                <div>
                    <h2>Quizz Completado</h2>
                    <h3>Respuestas Correctas: {correctAnswers}</h3>
                    <h3>Tiempo total empleado: {totalTime} segundos</h3>
                </div>
            )}
        </div>
    )
}

export default QuizView