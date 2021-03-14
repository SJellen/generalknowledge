import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/Header.module.scss'
import {GameContext} from '../context/GameContext'



export default function Header() {
    
    const {username, score, player2, player3, player2Score, player3Score} = useContext(GameContext)
       

    return (
        <div className={styles.container} >
            <div className={styles.playerContainer} style={{visibility: username ? "visible" : "hidden"}}>
               <span className={styles.username}>{username && username}</span>
               <span className={styles.score}>${score ? score : 0}</span>  
            </div>
            <div className={styles.playerContainer} style={{visibility: player2 ? "visible" : "hidden"}}>
               <span className={styles.username}>{player2 && player2}</span>
               <span className={styles.score}>${player2Score ? player2Score : 0}</span> 
            </div>
            <div className={styles.playerContainer} style={{visibility: player3 ? "visible" : "hidden"}}>
                <span className={styles.username}>{player3 && player3}</span>
                <span className={styles.score}>${player3Score ? player3Score : 0}</span>
            </div>
            <span className={styles.title}>General Knowledge</span>
        </div>
    )
    
}