import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/RoundTransition.module.scss'


export default function RoundTransitionOne() {

    const {selectedQuestions, score} = useContext(GameContext)


    return (
        <div  style={{display: selectedQuestions === 30 ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round One.</h1>
                <h2>Score: ${score}</h2>
            </div>
            
        </div>
    )
    
}