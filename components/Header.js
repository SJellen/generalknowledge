import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/Header.module.scss'
import {GameContext} from '../context/GameContext'



export default function Header() {
    
    const {username, score} = useContext(GameContext)
       

    return (
        <div className={styles.container}>
            <h1 className={styles.username}>{username && username}</h1>
            <h1>${score ? score : 0}</h1>
            <h1 className={styles.title}>General Knowledge</h1>
        </div>
    )
    
}