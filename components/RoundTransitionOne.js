import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/RoundTransition.module.scss'
import Link from 'next/link'



export default function RoundTransitionOne() {

    const {selectedQuestions, score} = useContext(GameContext)
    const {roundTwoCategories,fetchSecondRoundQuestions, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6} = useContext(QuestionContext)

    
    

    function handleRoundTwoClick() {
        fetchSecondRoundQuestions(roundTwoCategories[0], setSecondRoundQuestion1)
        fetchSecondRoundQuestions(roundTwoCategories[1], setSecondRoundQuestion2)
        fetchSecondRoundQuestions(roundTwoCategories[2], setSecondRoundQuestion3)
        fetchSecondRoundQuestions(roundTwoCategories[3], setSecondRoundQuestion4)
        fetchSecondRoundQuestions(roundTwoCategories[4], setSecondRoundQuestion5)
        fetchSecondRoundQuestions(roundTwoCategories[5], setSecondRoundQuestion6)
    }

    useEffect(() => {
    }, [roundTwoCategories])

    


    return (
        <div  style={{display: selectedQuestions === 30 ? "block" : "none"}} className={styles.container}>
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