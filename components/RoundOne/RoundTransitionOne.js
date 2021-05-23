import React, {useContext} from 'react'
import {GameContext} from '../../context/GameContext'
import styles from '../../styles/RoundTransition.module.scss'

export default function RoundTransitionOne() {

    const {selectedQuestions, score, player2Score, player3Score, username,player2, player3,  isRoundTwo, setIsRoundTwo,setIsRoundOne} = useContext(GameContext)

    function handleRoundTwoClick() {
        setIsRoundTwo(true)
        setIsRoundOne(false)
    }

    return (
        <div  style={{display: selectedQuestions === 30 && !isRoundTwo && score >= 0 ? "block": "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round One.</h1>
                <h2>{username}: ${score}</h2>
                <h2>{player2}: ${player2Score}</h2>
                <h2>{player3}: ${player3Score}</h2>
                <div className={styles.roundTwoLink}><a className={styles.beginButton} style={{color: "black"}}
                onClick={() => handleRoundTwoClick()}
                >Round Two</a></div>
            </div> 
        </div>
    )  
}