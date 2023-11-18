import { useState, useEffect } from "react"
import QuestionBackground from '../assets/img/pregunta-bg.png'

const QuestionCard = ({ question, handleAnswer }) => {

    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        handleAnswer(option === question.respuestaCorrecta)
    }

  return (
    <div className="question-card">
        <div className="bg-white h-[100%] py-[5rem] px-4 text-center bg-[white]">
            <h2 className="">{question.pregunta}</h2>
        </div>        
        <div className="grid gap-3 mt-5">
            {question.opciones.map((option, index) => (
                <button 
                    key={index}
                    className={`option-button border-2 border-yellow ${
                        selectedOption === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
  )
}

export default QuestionCard