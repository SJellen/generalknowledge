import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/RoundTransition.module.scss'

export default function RoundTransitionTwo() {

    const {selectedQuestions, score} = useContext(GameContext)


    return (
        <div  style={{display: selectedQuestions === 60 ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round Two.</h1>
                <h2>Score: ${score}</h2>
            </div>
            
        </div>
    )
    
}