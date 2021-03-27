import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/FinalRound.module.scss'
import Link from 'next/link'
import useFinalQuestionLogic from '../logic/useFinalQuestionLogic'
import useFinalRoundTransitionLogic from '../logic/useFinalRoundTransitionLogic'


export default function FinalQuestion() {
     
    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager} = useContext(GameContext)
    const {finalQuestion, setCurrentQuestion} = useContext(QuestionContext)


    const {} = useFinalRoundTransitionLogic()

    // useEffect(() => {
    //     if (selectedQuestions === 62) {
    //          setTimeout(() => {
    //         setCurrentQuestion(finalQuestion)
    //     }, 2500)
    //     }
       
    // }, [selectedQuestions])


    return (
        <div style={{display: selectedQuestions === 62 ? "block" : "none", color: "red"}} className={styles.container}>
            <div className={styles.parent}></div>
        </div>
    )
}