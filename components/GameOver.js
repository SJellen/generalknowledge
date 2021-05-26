import React, {useContext} from 'react'
import {GameContext} from '../context/GameContext'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/GameOver.module.scss'

export default function GameOver() {

    const {selectedQuestions, score, endGameStateResetGameContext} = useContext(GameContext)
    const {endGameStateResetQuestionContext} = useContext(QuestionContext)

    function handleEndGameClick() {
        endGameStateResetGameContext()
        endGameStateResetQuestionContext()
    }

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
                onClick={() => handleEndGameClick()}
                >End Game</a></div>
            </div>
        </div>
    ) 
}