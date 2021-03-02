import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/GameContext'
import styles from '../styles/Start.module.scss'
import Link from 'next/link'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'username'


export default function Start() {

    const {isStart, setIsStart, username, setUsername, setIs} = useContext(Context)
    const [showInput, setShowInput] = useState(false)
    const [showWordBox, setShowWordBox] = useState(true)
    const [tempUser, setTempUser] = useState('')


    console.log(username)


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

    }

    
    

    return (
       
             <div className={styles.container}>
        { showWordBox ? 
             <div className={styles.wordbox}>
                <h1>Welcome to General Knowledge.</h1>
                <h2>A trivia game spanning many categories, would you like to play?</h2>
                <button onClick={handlePlayButtonClick}>Play</button>
            </div> : "" }
           
            { showInput ?
                <div className={styles.inputBox}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Please Enter Your Name
                    <input type="text" name="name" onChange={handleChange}/>
                    </label>
                    <button type="submit">enter</button>
                    
                </form>
                
                    

            </div> : ""} 

            {
                    !showInput && !showWordBox ? <div className={styles.roundOneLink}><Link href="/roundone" ><a style={{color: "purple"}}>Start</a></Link></div> : ""
            }

            
        </div>
        
       
    )
}