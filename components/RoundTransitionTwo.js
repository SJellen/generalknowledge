import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/RoundTransition.module.scss'
import Link from 'next/link'

export default function RoundTransitionTwo() {

    const {selectedQuestions, score, isRoundTwo, setIsRoundTwo} = useContext(GameContext)


    function handleRoundTwoClick() {
        setIsRoundTwo(false)
    }    



    return (
        <div  style={{display: selectedQuestions === 60 && isRoundTwo ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round Two.</h1>
                <h2>Score: ${score}</h2>
                <div className={styles.roundTwoLink}><Link href="/finalround" style={{textDecoration: "none"}}><a className={styles.beginButton} style={{color: "black"}}
                onClick={handleRoundTwoClick}
                >Final Round</a></Link></div>
            </div>
            
        </div>
    )
    
}