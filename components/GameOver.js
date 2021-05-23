import React, {useContext} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/GameOver.module.scss'

export default function GameOver() {

    const {selectedQuestions, score, handleEndClick} = useContext(GameContext)

    return (
        <div className={styles.container} 
        style={{display: score < 0 && selectedQuestions === 30 || score < 0 && selectedQuestions === 60 ? "block": "none"}}>
            <div className={styles.textContainer}>
                <div>
                   <h1 className={styles.textWord}>
                    Game over. You need a score greater than $0 to advance to the next round.
                </h1> 
                </div>
                <div className={styles.roundTwoLink}><a className={styles.beginButton} style={{color: "black"}}
                onClick={handleEndClick}
                >End Game</a></div>
            </div>
        </div>
    ) 
}