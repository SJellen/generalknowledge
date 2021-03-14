import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Start.module.scss'
import Link from 'next/link'
import { QuestionContext } from '../context/QuestionContext'


const LOCAL_STORAGE_KEY = 'username'


export default function Start() {

    const {isStart, setIsStart, username, setUsername, setIs, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3} = useContext(GameContext)
    const {roundOneCategories, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, roundTwoCategories,fetchSecondRoundQuestions, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, finalRoundCategory, fetchFinalQuestion, finalQuestion} = useContext(QuestionContext)
    
    const [tempUser, setTempUser] = useState('')



    function handleChange(e) {
        let user = e.target.value
        setTempUser(user)
    }

    function handleStartSubmit(e) {
        e.preventDefault()
        setUsername(tempUser)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tempUser))
        setShowInput(false)
        fetchFirstRoundQuestions(roundOneCategories[0], setFirstRoundQuestion1)
        fetchFirstRoundQuestions(roundOneCategories[1], setFirstRoundQuestion2)
        fetchFirstRoundQuestions(roundOneCategories[2], setFirstRoundQuestion3)
        fetchFirstRoundQuestions(roundOneCategories[3], setFirstRoundQuestion4)
        fetchFirstRoundQuestions(roundOneCategories[4], setFirstRoundQuestion5)
        fetchFirstRoundQuestions(roundOneCategories[5], setFirstRoundQuestion6)
        fetchSecondRoundQuestions(roundTwoCategories[0], setSecondRoundQuestion1)
        fetchSecondRoundQuestions(roundTwoCategories[1], setSecondRoundQuestion2)
        fetchSecondRoundQuestions(roundTwoCategories[2], setSecondRoundQuestion3)
        fetchSecondRoundQuestions(roundTwoCategories[3], setSecondRoundQuestion4)
        fetchSecondRoundQuestions(roundTwoCategories[4], setSecondRoundQuestion5)
        fetchSecondRoundQuestions(roundTwoCategories[5], setSecondRoundQuestion6)
        fetchFinalQuestion(finalRoundCategory[0])
        setPlayer2("cpu1")
        setPlayer3("cpu2")
    }


    function handleStartGameClick() {
        setIsStart(false)
       
    }

    

    
    

    return (
             <div className={styles.container}>
                { showInput ?
                    <div>
                        <div className={styles.wordbox}>
                            <h1>Welcome to General Knowledge</h1>
                        </div> 
                        <div className={styles.inputBox}>
                            <form className={styles.form} onSubmit={handleStartSubmit}>
                                <div className={styles.inputContainer}>
                                    <label>Please Enter Your Name
                                        <input 
                                        type="text" 
                                        name="name" 
                                        maxLength="20"
                                        onChange={handleChange} 
                                        className={styles.input}/> 
                                    </label>
                                </div>
                                <button type="submit" className={styles.startButton}>Enter</button>
                            </form>
                        </div>
                    </div>
                    : ""} 
                {
                        !showInput ? 
                        <div className={styles.wordbox2}>
                            <h1 >Welcome {username}, Let's play!</h1>
                        <Link href="/roundone" style={{textDecoration: "none"}}><a className={styles.beginButton} type="submit" style={{color: "black"}} onClick={handleStartGameClick}>Start</a></Link>
                        </div> : ""
                }   
        </div>   
    )
}