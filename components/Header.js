import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/Header.module.scss'
import {GameContext} from '../context/GameContext'



export default function Header() {
    
    const {username, score} = useContext(GameContext)
       

    return (
        <div className={styles.container} >
            <span className={styles.username}>{username && username}</span>
            <span className={styles.score}>${score ? score : 0}</span>
            <span className={styles.title}>General Knowledge</span>
        </div>
    )
    
}