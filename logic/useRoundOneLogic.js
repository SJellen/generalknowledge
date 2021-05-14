import {useContext, useEffect, useImperativeHandle, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'



export default function useRoundOneLogic() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, getShuffledArr,setShuffledQuestionsArr} = useContext(QuestionContext)
    const {setCost, currentTurn, username,  setShowButtons, selectedQuestions, setSelectedQuestions, setClockStart, setPassPlayStart, isRoundOne, setIsRoundOne} = useContext(GameContext)
    const [categoryArr, setCategoryArr] = useState()
    

    
    // handle click on the board by player1
    function handleTileClick(e, question, questionCost, categoryIndex,index,) {
        setShowButtons(true)
        setPassPlayStart(true)
        setCurrentQuestion(question)
        setCost(questionCost)
        // setSelectedQuestions(prevCount => prevCount + 1)
        categoryArr[categoryIndex][index] = ""
        setCategoryArr([...categoryArr])
        // setClockStart(true)
    }



    // shuffle the correct answer with the incorrect answers
    useEffect(() => {
        const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
    }, [currentQuestion])



    // get a random but not selected question by computer
   function computerQuestionPicker() {
       let category= null, question = null
       if (!isRoundOne) return
       do {
            category = Math.floor(Math.random() * 6)
            question = Math.floor(Math.random() * 5) + 1
       }
       while (categoryArr?.[category][question] === "")
       setCurrentQuestion(categoryArr[category][question])
       categoryArr[category][question] = ""
       setCategoryArr([...categoryArr])
       setCost(question === 1 ? 200 : question === 2 ? 400 : question === 3 ? 600 : question === 4 ? 800 : 1000)
       
    //    console.log(currentQuestion)
   }


    // trim the difficultly sorted arrays to 6 questions
    useEffect(() => {
        setCategoryArr([firstRoundQuestion1?.slice(0,6), firstRoundQuestion2?.slice(0,6), firstRoundQuestion3?.slice(0,6), firstRoundQuestion4?.slice(0,6), firstRoundQuestion5?.slice(0,6), firstRoundQuestion6?.slice(0,6)])
    }, [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6])


    useEffect(() => {
        if (currentQuestion === undefined && currentTurn !== username && selectedQuestions != 30) {
            
            const timeout = setTimeout(() => {
                setShowButtons(true)
                setPassPlayStart(true)
                computerQuestionPicker()
                
                // setSelectedQuestions(prevCount => prevCount + 1)
            }, 1000)

            return () => clearTimeout(timeout)
        }
        
    }, [currentTurn, currentQuestion])


    return {categoryArr,handleTileClick}
}