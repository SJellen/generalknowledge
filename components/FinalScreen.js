import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/FinalScreen.module.scss'
import {GameContext} from '../context/GameContext'

export default function FinalScreen() {

    const {username, score, player2, player3, player2Score, player3Score, currentTurn, player2Move, player3Move, userMove, selectedQuestions, setUserMove, setPlayer2Move, setPlayer3Move} = useContext(GameContext)

    const [firstPlace, setFirstPlace] = useState()
    const [secondPlace, setSecondPlace] = useState()
    const [thirdPlace, setThirdPlace] = useState()

    useEffect(() => {
       if (selectedQuestions === 64) {
          console.log(score, player2Score, player3Score)
       }
       

    }, [selectedQuestions])


    return (
        <div  style={{display: selectedQuestions === 64 ? "" : 'none'}} className={styles.container}>
                     <div className={styles.textContainer}>
                     <h1 className={styles.title}>Final Score</h1>
                     <div className={styles.bidBoxTop}>
                        <h2>Player ones win or lose or tie statement goes here</h2>
                        
                     </div>
                     <div className={styles.bidBox}>
                        <h2>1st</h2>
                        <h2>Player</h2>
                        <h2>Score</h2>
                     </div>
                     <div className={styles.bidBox}>
                        <h2>2nd</h2>
                        <h2>Player</h2>
                        <h2>Score</h2>
                     </div>
                     <div className={styles.bidBox}>
                        <h2>3rd</h2>
                        <h2>Player</h2>
                        <h2>Score</h2>

                     </div>
                    
                    
                </div>
               
        </div>
    )
}