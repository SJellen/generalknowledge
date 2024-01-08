import React, {useContext} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Start.module.scss'
import useStartLogic from '../logic/useStartLogic'

export default function Start() {

    const {handleChange, handleStartSubmit, handleStartGameClick, loading} = useStartLogic()
    const {username, showInput, player2, player3, isStart} = useContext(GameContext)
    
    return (
             <div className={styles.container} style={{display: isStart  ? '' : "none"}}>
                { showInput ?
                    <div>
                        <div className={styles.wordBox}>
                            <h1>Welcome to General Knowledge</h1>
                        </div> 
                        <div className={styles.inputBox}>
                            <form className={styles.form} onSubmit={handleStartSubmit}>
                                <div className={styles.inputContainer}>
                                    <label>Please Enter A Player Name
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
                        <div className={styles.wordBox2}>
                            <h1 >Welcome <span className={styles.usernames}>{username}</span>.<br></br> Your opponents today are:<br></br> <span className={styles.usernames}>{player2}</span> and <span className={styles.usernames}>{player3}</span>.<br></br>
                             Let's play!</h1>
                             {
                                loading ? <div className={styles.loader}>Loading Categories... please be patient. API limits have been added. I'm working on a fix.
                                 </div> :  <a className={styles.beginButton} type="submit" style={{color: "black"}} onClick={handleStartGameClick}>Start</a>
                             }
                       
                        </div> : ""
                }   
        </div>   
    )
}