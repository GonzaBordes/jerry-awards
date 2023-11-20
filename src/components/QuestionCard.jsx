import { useState, useEffect } from "react"
import pinkDetails from '../assets/img/pink-details.svg'

const QuestionCard = ({ question, handleAnswer, step }) => {

    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionClick = (option) => {
        setTimeout(() => {
            setSelectedOption(option)
            handleAnswer(option === question.respuestaCorrecta)
          }, 500);    
    }

    let displayedStep = step < 9 ? `0${step+1}` : step+1;

  return (
    <div className="question-card px-4 relative">
        <div className="relative">
            <img src={pinkDetails} className="absolute top-[-3.3rem] rotate-90 left-[3.7rem] w-[1.5rem]" alt="" />
            <div className="border border-black translate-x-[-3px] translate-y-[-12px] absolute top-[-2rem] p-3 h-[4rem] w-[4rem] z-[90] rounded-full"></div>
            <div className="bg-[#f8bad3] flex-col absolute z-50 top-[-3rem] p-3 rounded-full h-[4rem] w-[4rem] flex items-center justify-center step-counter">
                <span className="bold text-[.9rem] mb-[3px] ">{displayedStep}</span>
                <div className="w-[90%]  bg-black h-[1px]"></div>
                <span className="bold text-[.9rem] mt-[3px] ">10</span>
            </div>
        </div>        
        <div className="bg-white h-[100%] py-[4rem]  text-center relative">
            <h2 className="z-50 relative bold">{question.pregunta}</h2>
            <div className="bg-[#65569a] scale-[1.05] h-full w-full absolute top-0 left-0 rounded-xl z-10 "></div>
            <div className="border-[1px] border-[yellow] translate-x-3 h-full w-full absolute top-0 left-0 z-30"></div>
            <div className="bg-[white] h-[97%] w-full absolute top-0 left-0 z-20 rotate-[-3deg] "></div>
        </div>        
        <div className="grid gap-3 mt-5">
            {question.opciones.map((option, index) => (
                <button 
                    key={index}
                    className={`option-button border-2 border-yellow ${
                    selectedOption === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span className="bold border-[1px] rounded-[5px] px-2 border-yellow bg-black text-yellow">{String.fromCharCode(65 + index)}</span> <span className="text-center">{option}</span><span class></span>
                </button>
            ))}
        </div>
    </div>
  )
}

export default QuestionCard