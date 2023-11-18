import { useState, useEffect } from "react"

const QuestionCard = ({ question, handleAnswer }) => {

    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        handleAnswer(option === question.respuestaCorrecta)
    }

  return (
    <div>
        <h2>{question.pregunta}</h2>
        <div>
            {question.opciones.map((option, index) => (
                <button 
                    key={index}
                    className={`option-button ${
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