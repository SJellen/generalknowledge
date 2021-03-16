import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'firstround'


export default function useRoundOneLogic() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, getShuffledArr,setShuffledQuestionsArr} = useContext(QuestionContext)
    const {setCost, setClockStart, currentTurn} = useContext(GameContext)
    const [categoryArr, setCategoryArr] = useState()

    
   
    function handleTileClick(e, question, questionCost, categoryIndex,index,) {
        setCurrentQuestion(question)
        setCost(questionCost)
        categoryArr[categoryIndex][index] = ""
        setCategoryArr([...categoryArr])
        setClockStart(true)
    }




    useEffect(() => {
        const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
        

    }, [currentQuestion])
   

   


    useEffect(() => {
        const firstRoundCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FR))
       
        if (firstRoundCategories) {
            if (firstRoundCategories[0]?.length !== 0) {
                setFirstRoundQuestion1(firstRoundCategories[0])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[0], setFirstRoundQuestion1)
            }
            if (firstRoundCategories[1]?.length !== 0) {
                setFirstRoundQuestion2(firstRoundCategories[1])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[1], setFirstRoundQuestion2)
            }
            if (firstRoundCategories[2]?.length !== 0) {
                setFirstRoundQuestion3(firstRoundCategories[2])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[2], setFirstRoundQuestion3)
            }
            if (firstRoundCategories[3]?.length !== 0) {
                setFirstRoundQuestion4(firstRoundCategories[3])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[3], setFirstRoundQuestion4)
            }
            if (firstRoundCategories[4]?.length !== 0) {
                setFirstRoundQuestion5(firstRoundCategories[4])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[4], setFirstRoundQuestion5) 
            }
            if (firstRoundCategories[4]?.length !== 0) {
                 setFirstRoundQuestion6(firstRoundCategories[5])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[5], setFirstRoundQuestion6)
            }

           
        } else {
            let categoryArr = [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3,firstRoundQuestion4,firstRoundQuestion5,firstRoundQuestion6]
            localStorage.setItem(LOCAL_STORAGE_KEY_FR, JSON.stringify(categoryArr))
        }

    }, [])


   


    useEffect(() => {
        setCategoryArr([firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6])
        
    }, [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6])


    useEffect(() => {

    }, [currentTurn])






    return {categoryArr,handleTileClick}
}