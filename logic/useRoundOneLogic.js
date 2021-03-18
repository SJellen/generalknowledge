import {useContext, useEffect, useImperativeHandle, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'firstround'
const LOCAL_STORAGE_KEY_FR_CA = 'frcategoryArr'


export default function useRoundOneLogic() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, getShuffledArr,setShuffledQuestionsArr} = useContext(QuestionContext)
    const {setCost, setClockStart, currentTurn, username, cost, setShowButtons} = useContext(GameContext)
    const [categoryArr, setCategoryArr] = useState()

    
    // handle click on the board by player1
    function handleTileClick(e, question, questionCost, categoryIndex,index,) {
        setShowButtons(true)
        setCurrentQuestion(question)
        setCost(questionCost)
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


    // keep the questions in local storage
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


    // get a random but not selected question by computer
   function computerQuestionPicker() {
       let category= null, question = null
       do {
            category = Math.floor(Math.random() * 6)
            question = Math.floor(Math.random() * 5) + 1
       }
       while (categoryArr?.[category][question] === "")
       setCurrentQuestion(categoryArr[category][question])
       categoryArr[category][question] = ""
       setCategoryArr([...categoryArr])
       setCost(question === 0 ? 200 : question === 1 ? 400 : question === 2 ? 600 : question === 3 ? 800 : 1000)
       
    //    console.log(currentQuestion)
   }


    // trim the difficultly sorted arrays to 6 questions
    useEffect(() => {
        setCategoryArr([firstRoundQuestion1?.slice(0,6), firstRoundQuestion2?.slice(0,6), firstRoundQuestion3?.slice(0,6), firstRoundQuestion4?.slice(0,6), firstRoundQuestion5?.slice(0,6), firstRoundQuestion6?.slice(0,6)])
    }, [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6])


    useEffect(() => {
        if (currentQuestion === undefined && currentTurn !== username) {
            setTimeout(() => {
                setShowButtons(true)
                computerQuestionPicker()
            }, 1000)
            
            // couldnt i set the new array here? 
            
            
        }

        
        // console.log(currentQuestion, cost)

    }, [currentTurn, currentQuestion])


    // useEffect(() => {
    //     const firstRoundCa = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FR_CA))
    //     if (firstRoundCa) {
    //         setCategoryArr(firstRoundCa)
    //     } else {
    //         localStorage.setItem(LOCAL_STORAGE_KEY_FR_CA, JSON.stringify(categoryArr && categoryArr))
    //     }
    // }, [categoryArr])






    return {categoryArr,handleTileClick}
}