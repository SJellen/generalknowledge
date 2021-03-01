import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/GameContext'
import styles from '../styles/Start.module.scss'


export default function Start() {

    const {isStart, setIsStart} = useContext(Context)

    

    return (
        <div className={styles.container}>
            <div className={styles.wordbox}>
                <h1>Welcome to General Knowledge.</h1>
                <h2>A trivia game spanning many categories, would you like to play?</h2>
                <button>Play the game</button>
            </div>
            
        </div>
    )
}