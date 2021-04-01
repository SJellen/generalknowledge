import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/FinalScoreScreen.module.scss'
import {GameContext} from '../context/GameContext'



export default function FinalScoreScreen() {
    
    const {username, score, player2, player3, player2Score, player3Score, currentTurn, player2Move, player3Move, userMove, selectedQuestions, setUserMove, setPlayer2Move, setPlayer3Move} = useContext(GameContext)


    return (
        <div className={styles.container} style={{display: selectedQuestions === 63 ? "" : 'none'}}>
            <div className={styles.playerContainer} >
                <div 
                    className={styles.playerTile} >
                <span 
                    className={styles.username} >{username && username}</span>
                <span 
                    className={styles.score} >
                    ${score ? score : 0}</span>  
                </div>
                <div className={styles.playerMove}>
                    {userMove && userMove}
                </div>
            </div>
           
            <div className={styles.playerContainer} >
                <div 
                    className={styles.playerTile} >
                <span 
                    className={styles.username}>{player2 && player2}</span>
                <span 
                    className={styles.score}>
                    ${player2Score ? player2Score : 0}</span> 
                    
                </div>
                <div className={styles.playerMove}>
                    {player2Move && player2Move}
                </div>
            </div>

            <div className={styles.playerContainer} >
                <div className={styles.playerTile}>
                    <span 
                        className={styles.username}>{player3 && player3}</span>
                    <span 
                        className={styles.score} >
                        ${player3Score ? player3Score : 0}</span>
                </div>
                <div className={styles.playerMove}>
                    {player3Move && player3Move}
                </div>
            </div>
            
            
            <span className={styles.title} style={{display: currentTurn !== undefined ? 'none' : ''}}>General Knowledge</span>
        </div>
    )
    
}