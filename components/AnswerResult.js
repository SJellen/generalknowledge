import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/AnswerResult.module.scss'

export default function AnswerResult() {

    const {answerResult,selectedQuestions} = useContext(GameContext)
    return (
        <div className={styles.container} 
             style={{display: answerResult === "Correct" && selectedQuestions !== 30 && selectedQuestions !== 60 ? "" : answerResult === "Incorrect" && selectedQuestions !== 30 && selectedQuestions !== 60 ? "" : 'none'}}>
            <span className={styles.answerResult}>
                {answerResult === "Correct" ? "Correct" : answerResult === "Incorrect" ? "Incorrect" : ''}
            </span>
        </div>
    )
}