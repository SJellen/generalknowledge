import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'



export default function useFinalQuestionLogic() {


    const {finalQuestion, currentQuestion, setCurrentQuestion} = useContext(QuestionContext)
    const {setCost, currentTurn, username,  setShowButtons, selectedQuestions, setSelectedQuestions} = useContext(GameContext)


    console.log(finalQuestion)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentQuestion(finalQuestion)
    //     }, 2500)
    // }, [])
    
    
    return {}

}