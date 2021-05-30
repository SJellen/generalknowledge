import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'

export default function useRoundTwoLogic() {

    const {secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, fetchSecondRoundQuestions, getShuffledArr,shuffledQuestionsArr, setShuffledQuestionsArr} = useContext(QuestionContext)
    const {selectedQuestions, cost, setCost, setClockStart, setIsRoundTwo, currentTurn, username, setShowButtons, setCurrentTurn, setPlayer2Move, setPlayer3Move, setSelectedQuestions, setPassPlayStart, isRoundTwo} = useContext(GameContext)

    
    
    const [categoryArr2, setCategoryArr2] = useState()
    // handle second round tile click
    function handleTileClick2(e, question, questionCost, categoryIndex,index,) {
        setShowButtons(true)
        setPassPlayStart(true)
        setCurrentQuestion(question)
        setCost(questionCost)
        categoryArr2[categoryIndex][index] = ""
        setCategoryArr2([...categoryArr2])
    }

    // shuffle second round correct and incorrect answers
    useEffect(() => {
        const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
    }, [currentQuestion])


     // get a random but not selected question by computer
   function computerQuestionPicker2() {
    let category = null, question = null
    if (!isRoundTwo) return
    do {
         category = Math.floor(Math.random() * 6)
         question = Math.floor(Math.random() * 5) + 1
    }
    while (categoryArr2?.[category][question] === "")
    setCurrentQuestion(categoryArr2?.[category][question])
    categoryArr2[category][question] = ""
    setCategoryArr2([...categoryArr2])
    setCost(question === 1 ? 400 : question === 2 ? 800 : question === 3 ? 1200 : question === 4 ? 1600 : 2000)
}


    useEffect(() => {
        const secondCat1 = [secondRoundQuestion1?.[0], secondRoundQuestion1?.[2], secondRoundQuestion1?.[4], secondRoundQuestion1?.[5], secondRoundQuestion1?.[6], secondRoundQuestion1?.[7]]
        const secondCat2 = [secondRoundQuestion2?.[0], secondRoundQuestion2?.[2], secondRoundQuestion2?.[4], secondRoundQuestion2?.[5], secondRoundQuestion2?.[6], secondRoundQuestion2?.[7]]
        const secondCat3 = [secondRoundQuestion3?.[0], secondRoundQuestion3?.[2], secondRoundQuestion3?.[4], secondRoundQuestion3?.[5], secondRoundQuestion3?.[6], secondRoundQuestion3?.[7]]
        const secondCat4 = [secondRoundQuestion4?.[0], secondRoundQuestion4?.[2], secondRoundQuestion4?.[4], secondRoundQuestion4?.[5], secondRoundQuestion4?.[6], secondRoundQuestion4?.[7]]
        const secondCat5 = [secondRoundQuestion5?.[0], secondRoundQuestion5?.[2], secondRoundQuestion5?.[4], secondRoundQuestion5?.[5], secondRoundQuestion5?.[6], secondRoundQuestion5?.[7]]
        const secondCat6 = [secondRoundQuestion6?.[0], secondRoundQuestion6?.[2], secondRoundQuestion6?.[4], secondRoundQuestion6?.[5], secondRoundQuestion6?.[6], secondRoundQuestion6?.[7]]
        setCategoryArr2([secondCat1, secondCat2, secondCat3, secondCat4, secondCat5, secondCat6])
    }, [secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6])


    useEffect(() => {
   
            if (currentQuestion === undefined && currentTurn !== username && selectedQuestions !== 60 && selectedQuestions !== 30) {
            const timeout = setTimeout(() => {
                setShowButtons(true)
                setPassPlayStart(true)
                computerQuestionPicker2()
            }, 1000)
            return () => clearTimeout(timeout) 
        }
    }, [currentTurn, currentQuestion])

    return {handleTileClick2, categoryArr2}
    
}