import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import styles from '../styles/FinalRoundTransition.module.scss'
import Link from 'next/link'
import uswFinalRoundTransitionLogic from '../logic/useFinalRoundTransitionLogic'
import useFinalRoundTransitionLogic from '../logic/useFinalRoundTransitionLogic'

export default function FinalRoundTransition() {

    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager} = useContext(GameContext)

    const {handleChange, handleWagerSubmit, showFinalLink, tempWager} = useFinalRoundTransitionLogic()
    





    return (
        <div  style={{display: selectedQuestions === 61 ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Please Enter A Wager</h1>
                <div className={styles.bidBox}>
                    <h2>Player</h2>
                    <h2>Score</h2>
                    <h2>Wager</h2>
                </div>
                <div className={styles.bidBox}>
                   <h2>{username}</h2>
                   <h2>${score}</h2>
                   { userWager ? <h2>{`$${userWager}`}</h2> : 
                    <form onSubmit={handleWagerSubmit}>
                       <label htmlFor="bid" >Wager ${tempWager}</label>
                       <input type="range" id="wager" name="wager" min="1" max={score} onChange={(e) => handleChange(e)}/>
                       <input type="submit" ></input>
                   </form>

                   }
                  
                </div>
                <div className={styles.bidBox}>
                    <h2>{player2}</h2>
                    <h2>${player2Score}</h2>
                    <h2>{player2Wager ? `$${player2Wager}` : "Bidding..."}</h2>
                </div>
                <div className={styles.bidBox}>
                     <h2>{player3}</h2>
                     <h2>${player3Score}</h2>
                     <h2>{player3Wager ? `$${player3Wager}` : "Bidding..."}</h2>
                </div>
                
                
               { showFinalLink ? 
                <div className={styles.roundTwoLink}><Link href="/finalround" style={{textDecoration: "none"}}><a className={styles.beginButton} style={{color: "black"}}
                // onClick={handleRoundTwoClick}
                >Start Final</a></Link></div> : ""
               }
                
            </div>
            
        </div>
    )
    
}