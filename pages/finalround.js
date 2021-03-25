import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import Link from 'next/link'
import styles from '../styles/FinalRound.module.scss'

// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'finalround'

export default function FinalRound() {

    const {finalQuestion, categoryCleaner, setCurrentQuestion, currentQuestion, setShuffledQuestionsArr, getShuffledArr} = useContext(QuestionContext)
    const {selectedQuestions, cost, setCost, setClockStart, setIsRoundTwo} = useContext(GameContext)

    

    useEffect(() => {
            console.log(finalQuestion)
    }, [finalQuestion])

    // function handleTileClick(e, question, cost, id) {
    //     setCurrentQuestion(question)
        
    //     setCost(cost)
    //     let x = document.getElementById(id)
    //     x.innerHTML = ""
    //     x.style.pointerEvents = "none"
    //     setClockStart(true)
        
    // }

    useEffect(() => {
        const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
        

    }, [currentQuestion])

   



    return (
        <div className={styles.container}style={{display: selectedQuestions === 61 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
            <div className={styles.parent} >
                <div className={styles.gridTitle} id="finalr" onClick={(e) => handleTileClick(e, finalQuestion[0], 1, "finalr")}>{finalQuestion && categoryCleaner(finalQuestion[0]?.category)}</div>
            </div>
        </div>
    )
    
}