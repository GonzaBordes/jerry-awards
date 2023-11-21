import { useState, useEffect } from "react"
import QuestionCard from "../components/QuestionCard"
import Questions from "../data/QuizzQuestions"
import './QuizzView.css'
import {motion, AnimatePresence} from 'framer-motion'
import axios from "axios"


const QuizView = ({userId, userName}) => { 
    
    // const [correctAnswers, setCorrectAnswers] = useState(0)
    const [step, setStep] = useState(0)
    const [timer, setTimer] = useState(15);
    // const [totalTime, setTotalTime] = useState(0);
    const [quizzData,setQuizzData] = useState({
        user_id: userId,
        answers_ok: 0,
        total_time: 0
    })

    console.log(quizzData)


    const handleAnswer = (isCorrect) => {
        console.log(`Respuesta seleccionada: ${isCorrect ? "Correcta" : "Incorrecta"}`);
        if (isCorrect) {
          setQuizzData((prevQuizzData) => ({
            ...prevQuizzData,
            answers_ok: prevQuizzData.answers_ok + 1
          }));
        }
        setStep((prevStep) => prevStep + 1);
        setTimer(15);
      };
    
      useEffect(() => {
        // Configura el temporizador para cada pregunta
        const temporizador = setInterval(() => {
          if (timer > 0) {
            setTimer((prevTimer) => prevTimer - 1);
            setQuizzData((prevQuizzData) => ({
              ...prevQuizzData,
              total_time: prevQuizzData.total_time + 1
            }));
          } else {
            // Cuando se llega a 0, pasa a la siguiente pregunta
            setStep((prevStep) => prevStep + 1);
            setTimer(15); // Reinicia el temporizador para la siguiente pregunta
          }
        }, 1000);

        if (step === Questions.length) {
            clearInterval(temporizador);
            // ACÁ VA LA LÓGICA PARA MOSTRAR LOS PUNTOS Y HACER EL POST
            axios.post('https://us-central1-kickads-airbyte.cloudfunctions.net/post_jerry_points', quizzData, {
              headers: {
                //'Content-Type': 'application/json',
                'Accept': 'application/json',
                'mode': 'no-cors'
              },
            })
            .then(response => {
              console.log('Quizz Data Enviada')
              console.log(response.config.data)
            })
            .catch(error =>{
              console.log("Error al enviar los datos")
              console.log(error)
            });
          }

        return () => clearInterval(temporizador);
      }, [timer,step, Questions.length]);

    // Esta variable almacena el string que se va mostrar en el contador, si el numero es menor a 10 se le agrega un cero, sino, no se agrega   
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
                        <h2 className="text-center text-yellow light text-2xl italic mb-2">{userName}</h2>
                        <div className="grid place-content-center text-center">
                            <span className="bold text-md text-yellow">Respondiste</span>
                            <span className="block overflow-hidden">
                                <motion.span className="block text-yellow bold text-[6rem]"
                                
                                initial={{ y: '100%' }}
                                animate={{ y:'0%'}}
                                transition={{ duration: 0.5, delay: .7 }}
                                >
                                    {quizzData.answers_ok}
                                </motion.span>
                            </span>                             
                            <span className="block text-yellow">preguntas correctas</span>
                        </div>
                        <span className="block text-[white] text-center">Tiempo total empleado: {quizzData.total_time} segundos</span>
                    </motion.div>
                )}
            </AnimatePresence>            
        </div>
    )
}

export default QuizView