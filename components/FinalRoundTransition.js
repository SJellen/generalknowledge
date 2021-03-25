import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/RoundTransition.module.scss'
import Link from 'next/link'

export default function FinalRoundTransition() {

    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree} = useContext(GameContext)


    // function handleRoundTwoClick() {
    //     setIsRoundTwo(false)
    //     setIsRoundThree(true)
    // }    



    return (
        <div  style={{display: selectedQuestions === 61 ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Please Enter A Wager</h1>
                <h2>{username} ${score}</h2><h2>bid</h2>
                <h2>{player2} ${player2Score}</h2>
                <h2>{player3} ${player3Score}</h2>
                <div className={styles.roundTwoLink}><Link href="/finalround" style={{textDecoration: "none"}}><a className={styles.beginButton} style={{color: "black"}}
                // onClick={handleRoundTwoClick}
                >Start Final</a></Link></div>
            </div>
            
        </div>
    )
    
}