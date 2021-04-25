import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import Link from 'next/link'
import styles from '../styles/FinalRound.module.scss'

// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'finalround'

export default function FinalRound() {

    const {finalQuestion, categoryCleaner, setCurrentQuestion, currentQuestion, setShuffledQuestionsArr, getShuffledArr} = useContext(QuestionContext)
    const {selectedQuestions, cost, setCost, setClockStart, setIsRoundTwo, setSelectedQuestions, isRoundThree} = useContext(GameContext)

    

    useEffect(() => {
        const questionArr = finalQuestion && [...finalQuestion[0].incorrect_answers, finalQuestion[0].correct_answer]
        
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
        if (isRoundThree) {
            setTimeout(() => {
            setSelectedQuestions(prevState => prevState + 1)
        }, 2500)
        }
        
        

    }, [finalQuestion])



   



    return (
        <div className={styles.container}style={{display: selectedQuestions === 60 || selectedQuestions === 62  ? "block" : "none", pointerEvents: currentQuestion ? "none": ''}}>
            <div className={styles.parent} >
                <div className={styles.gridTitle} id="finalr" onClick={(e) => handleTileClick(e, finalQuestion[0], 1, "finalr")}>{finalQuestion && categoryCleaner(finalQuestion[0]?.category)}</div>
            </div>
        </div>
    )
    
}