import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/FinalRoundTransition.module.scss'
import Link from 'next/link'


export default function FinalQuestion() {
     
    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager} = useContext(GameContext)




    return (
        <div style={{display: selectedQuestions === 62 ? "block" : "none", color: "red"}} className={styles.container}>
            <h1>dgdsfgfgfd</h1>
        </div>
    )
}