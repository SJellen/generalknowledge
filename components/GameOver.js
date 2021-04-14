import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/GameOver.module.scss'
import Link from 'next/link'

export default function GameOver() {

    const {setSelectedQuestions, selectedQuestions, score} = useContext(GameContext)


    function handleEndClick() {
       
            setSelectedQuestions(0)
            localStorage.clear()
            forceUpdate()
       
        
    }

    return (
        <div className={styles.container} 
        style={{display: score < 0 && selectedQuestions === 30 || score < 0 && selectedQuestions === 60 ? "block": "none"}}
        >
            <div className={styles.textContainer}>
                <div>
                   <h1 className={styles.textWord}>
                    Game over. You need a score greater than $0 to advance to the next round.
                </h1> 
                </div>
                
                <div className={styles.roundTwoLink}><Link href="/" style={{textDecoration: "none"}}><a className={styles.beginButton} style={{color: "black"}}
                onClick={handleEndClick}
                >End Game</a></Link></div>
            </div>
        </div>
    )
    
}