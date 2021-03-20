import {useContext, useEffect, useImperativeHandle, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'firstround'
const LOCAL_STORAGE_KEY_FR_CA = 'frcategoryArr'
const LOCAL_STORAGE_KEY_SR = 'secondround'


export default function useRoundOneLogic() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, getShuffledArr,setShuffledQuestionsArr, secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, fetchSecondRoundQuestions,} = useContext(QuestionContext)
    const {setCost, setClockStart, currentTurn, username, cost, setShowButtons, selectedQuestions} = useContext(GameContext)
    const [categoryArr, setCategoryArr] = useState()
    // const [categoryArr2, setCategoryArr2] = useState()

    
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
       setCost(question === 1 ? 200 : question === 2 ? 400 : question === 3 ? 600 : question === 4 ? 800 : 1000)
       
    //    console.log(currentQuestion)
   }


    // trim the difficultly sorted arrays to 6 questions
    useEffect(() => {
        setCategoryArr([firstRoundQuestion1?.slice(0,6), firstRoundQuestion2?.slice(0,6), firstRoundQuestion3?.slice(0,6), firstRoundQuestion4?.slice(0,6), firstRoundQuestion5?.slice(0,6), firstRoundQuestion6?.slice(0,6)])
    }, [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6])


    useEffect(() => {
        if (currentQuestion === undefined && currentTurn !== username && selectedQuestions != 30) {
            setTimeout(() => {
                setShowButtons(true)
                computerQuestionPicker()
            }, 1000)
   
        }

    }, [currentTurn, currentQuestion])



     // get second round questions from storage
    //  useEffect(() => {
    //     const secondRoundCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SR))
       
    //     if (secondRoundCategories) {
    //         if (secondRoundCategories[0]?.length !== 0) {
    //             setSecondRoundQuestion1(secondRoundCategories[0])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[0], setSecondRoundQuestion1)
    //         }
    //         if (secondRoundCategories[1]?.length !== 0) {
    //             setSecondRoundQuestion2(secondRoundCategories[1])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[1], setSecondRoundQuestion2)
    //         }
    //         if (secondRoundCategories[2]?.length !== 0) {
    //             setSecondRoundQuestion3(secondRoundCategories[2])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[2], setSecondRoundQuestion3)
    //         }
    //         if (secondRoundCategories[3]?.length !== 0) {
    //             setSecondRoundQuestion4(secondRoundCategories[3])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[3], setSecondRoundQuestion4)
    //         }
    //         if (secondRoundCategories[4]?.length !== 0) {
    //             setSecondRoundQuestion5(secondRoundCategories[4])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[4], setSecondRoundQuestion5) 
    //         }
    //         if (secondRoundCategories[4]?.length !== 0) {
    //             setSecondRoundQuestion6(secondRoundCategories[5])
    //         } else {
    //             fetchSecondRoundQuestions(roundOneCategories[5], setSecondRoundQuestion6)
    //         }

           
    //     } else {
    //         let categoryArr2 = [secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3,secondRoundQuestion4,secondRoundQuestion5,secondRoundQuestion6]
    //         localStorage.setItem(LOCAL_STORAGE_KEY_SR, JSON.stringify(categoryArr2))
    //     }

    // }, [])


    // useEffect(() => {
    //     let secondCat1 = [secondRoundQuestion1?.[0], secondRoundQuestion1?.[2], secondRoundQuestion1?.[4], secondRoundQuestion1?.[5], secondRoundQuestion1?.[6], secondRoundQuestion1?.[7]]
    //     let secondCat2 = [secondRoundQuestion2?.[0], secondRoundQuestion2?.[2], secondRoundQuestion2?.[4], secondRoundQuestion2?.[5], secondRoundQuestion2?.[6], secondRoundQuestion2?.[7]]
    //     let secondCat3 = [secondRoundQuestion3?.[0], secondRoundQuestion3?.[2], secondRoundQuestion3?.[4], secondRoundQuestion3?.[5], secondRoundQuestion3?.[6], secondRoundQuestion3?.[7]]
    //     let secondCat4 = [secondRoundQuestion4?.[0], secondRoundQuestion4?.[2], secondRoundQuestion4?.[4], secondRoundQuestion4?.[5], secondRoundQuestion4?.[6], secondRoundQuestion4?.[7]]
    //     let secondCat5 = [secondRoundQuestion5?.[0], secondRoundQuestion5?.[2], secondRoundQuestion5?.[4], secondRoundQuestion5?.[5], secondRoundQuestion5?.[6], secondRoundQuestion5?.[7]]
    //     let secondCat6 = [secondRoundQuestion6?.[0], secondRoundQuestion6?.[2], secondRoundQuestion6?.[4], secondRoundQuestion6?.[5], secondRoundQuestion6?.[6], secondRoundQuestion6?.[7]]

    //     setCategoryArr2([secondCat1, secondCat2, secondCat3, secondCat4, secondCat5, secondCat6])
        
    // }, [secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6])








    


  


    return {categoryArr,handleTileClick}
}