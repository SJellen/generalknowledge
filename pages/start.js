import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Start.module.scss'
import Link from 'next/link'
import { QuestionContext } from '../context/QuestionContext'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'username'


export default function Start() {

    const {isStart, setIsStart, username, setUsername, setIs} = useContext(GameContext)
    const {roundOneCategories, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions } = useContext(QuestionContext)
    const [showInput, setShowInput] = useState(false)
    const [showWordBox, setShowWordBox] = useState(true)
    const [tempUser, setTempUser] = useState('')


  


    function handlePlayButtonClick() {
        setShowWordBox(false)
        setShowInput(true)
    }

    function handleChange(e) {
        let user = e.target.value
        setTempUser(user)
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        setUsername(tempUser)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tempUser))
        setIsStart(false)
        setShowInput(false)
        fetchFirstRoundQuestions(roundOneCategories[0], setFirstRoundQuestion1)
        fetchFirstRoundQuestions(roundOneCategories[1], setFirstRoundQuestion2)
        fetchFirstRoundQuestions(roundOneCategories[2], setFirstRoundQuestion3)
        fetchFirstRoundQuestions(roundOneCategories[3], setFirstRoundQuestion4)
        fetchFirstRoundQuestions(roundOneCategories[4], setFirstRoundQuestion5)
        fetchFirstRoundQuestions(roundOneCategories[5], setFirstRoundQuestion6)
    }

    useEffect(() => {

    }, [roundOneCategories])

    
    

    return (
       
             <div className={styles.container}>
        { showWordBox ? 
             <div className={styles.wordbox}>
                <h1>Welcome to General Knowledge</h1>
                <h2>Would you Like to Play?</h2>
                <button onClick={handlePlayButtonClick} className={styles.playButton}>Play</button>
            </div> : "" }
           
            { showInput ?
                <div className={styles.inputBox}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                      <label>Please Enter Your Name
                        <input 
                        type="text" 
                        name="name" 
                        maxlength="20"
                        onChange={handleChange} 
                        className={styles.input}/> 
                      </label>
                    </div>

                    <button type="submit" className={styles.startButton}>enter</button>
                    
                </form>
                
                    

            </div> : ""} 

            {
                    !showInput && !showWordBox ? <div className={styles.roundOneLink}><Link href="/roundone" style={{textDecoration: "none"}}><a style={{color: "purple"}}>Start</a></Link></div> : ""
            }

            
        </div>
        
       
    )
}