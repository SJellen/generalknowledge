import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/AnswerResult.module.scss'


export default function AnswerResult() {

    const {answerResult} = useContext(GameContext)
    return (
        <div className={styles.container} style={{display: answerResult === "correct" ? "" : answerResult === "incorrect" ? "" : 'none'}}>
            <span className={styles.answerResult}>
                {answerResult === "correct" ? "Correct" : answerResult === "incorrect" ? "Incorrect" : ''}
            </span>
        </div>
    )
}