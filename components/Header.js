import React, {useContext, useEffect, useState} from 'react'
import styles from '../styles/Header.module.scss'
import {Context} from '../context/GameContext'



export default function Header() {
    
    const {username} = useContext(Context)
        console.log(username)

    return (
        <div className={styles.container}>
            <h1 className={styles.username}>{username && username}</h1>
            <h1 className={styles.title}>General Knowledge</h1>
        </div>
    )
    
}