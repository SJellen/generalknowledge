import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/FinalScreen.module.scss'
import {GameContext} from '../context/GameContext'

export default function FinalScreen() {

    const {username, score, player2, player3, player2Score, player3Score, currentTurn, player2Move, player3Move, userMove, selectedQuestions, setUserMove, setPlayer2Move, setPlayer3Move} = useContext(GameContext)


    return (
        <div  style={{display: selectedQuestions === 64 ? "" : 'none'}} className={styles.container}>
                     <div className={styles.textContainer}>
                
                    <h2>Player</h2>
                    <h2>Score</h2>
                    <h2>Wager</h2>
                </div>
               
        </div>
    )
}