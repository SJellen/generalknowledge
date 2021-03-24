import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/Header.module.scss'
import {GameContext} from '../context/GameContext'



export default function Header() {
    
    const {username, score, player2, player3, player2Score, player3Score, currentTurn, player2Move, player3Move, userMove} = useContext(GameContext)


   
       
    


    return (
        <div className={styles.container} >
            <div className={styles.playerContainer}>
                <div 
                    className={styles.playerTile} 
                    style={{visibility: username ? "visible" : "hidden"}}>
                <span 
                    className={styles.username} 
                    style={{color: currentTurn === username ? "rgb(235, 214, 94)" : ""}}>{username && username}</span>
                <span 
                    className={styles.score} 
                    style={{color: currentTurn === username ? "rgb(235, 214, 94)" : ""}}>
                    ${score ? score : 0}</span>  
                </div>
                <div className={styles.playerMove}>
                    {userMove && userMove}
                </div>
            </div>
           
            <div className={styles.playerContainer}>
                <div 
                    className={styles.playerTile} 
                    style={{visibility: player2 ? "visible" : "hidden"}}>
                <span 
                    className={styles.username} 
                    style={{color: currentTurn === player2 ? "rgb(235, 214, 94)" : ""}}>{player2 && player2}</span>
                <span 
                    className={styles.score} 
                    style={{color: currentTurn === player2 ? "rgb(235, 214, 94)" : ""}}>
                    ${player2Score ? player2Score : 0}</span> 
                    
                </div>
                <div className={styles.playerMove}>
                    {player2Move && player2Move}
                </div>
            </div>

            <div className={styles.playerContainer}>
                <div 
                    className={styles.playerTile} 
                    style={{visibility: player3 ? "visible" : "hidden"}}>
                    <span 
                        className={styles.username} 
                        style={{color: currentTurn === player3 ? "rgb(235, 214, 94)" : ""}}>{player3 && player3}</span>
                    <span 
                        className={styles.score} 
                        style={{color: currentTurn === player3 ? "rgb(235, 214, 94)" : ""}}>
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