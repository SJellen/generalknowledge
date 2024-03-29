import React, {useContext} from 'react'
import {GameContext} from '../../context/GameContext'
import styles from '../../styles/RoundTransition.module.scss'

export default function RoundTransitionTwo() {

    const {selectedQuestions, score, player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, setSelectedQuestions} = useContext(GameContext)

    function handleRoundTwoClick() {
        setIsRoundTwo(false)
        setIsRoundThree(true)
        setTimeout(() => {
            setSelectedQuestions(prevState => prevState + 1)
        }, 3000)
    }    

    return (
        <div  style={{display: selectedQuestions === 60 && !isRoundThree && score >= 0 ? "block" : "none"}} className={styles.container}>
            <div className={styles.textContainer}>
                <h1>End of Round Two.</h1>
                <h2>{username}: ${score}</h2>
                <h2>{player2}: ${player2Score}</h2>
                <h2>{player3}: ${player3Score}</h2>
                <div className={styles.roundTwoLink}><a className={styles.beginButton} style={{color: "black"}}
                onClick={handleRoundTwoClick}
                >Final Round</a></div>
            </div>
        </div>
    )
}