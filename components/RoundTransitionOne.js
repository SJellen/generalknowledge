import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/RoundTransition.module.scss'
import Link from 'next/link'



export default function RoundTransitionOne() {

    const {selectedQuestions, score, isRoundTwo, setIsRoundTwo} = useContext(GameContext)

    function handleRoundTwoClick() {
        setIsRoundTwo(true)
    }

  

    return (
        <div  style={{display: selectedQuestions === 30 && !isRoundTwo ? "block": "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round One.</h1>
                <h2>Score: ${score}</h2>
                <div className={styles.roundTwoLink}><Link href="/roundtwo" style={{textDecoration: "none"}}><a className={styles.beginButton} style={{color: "black"}}
                onClick={handleRoundTwoClick}
                >Round Two</a></Link></div>
            </div>
            
        </div>
    )
    
}