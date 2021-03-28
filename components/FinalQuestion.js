import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/FinalQuestion.module.scss'
import Link from 'next/link'
import useFinalQuestionLogic from '../logic/useFinalQuestionLogic'
import useFinalRoundTransitionLogic from '../logic/useFinalRoundTransitionLogic'


export default function FinalQuestion() {
     
    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, timeRemaining, setSelectedQuestions, setScore, setAnswerResult, setUserMove, setPlayer2Score, setPlayer3Score, setTimeRemaining, clockStart, setClockStart, START_TIME, player2Move, setPlayer2Move, player3Move, setPlayer3Move,userMove, } = useContext(GameContext)
    const {finalQuestion, setCurrentQuestion, questionCleaner, shuffledQuestionsArr, setShuffledQuestionsArr, getShuffledArr} = useContext(QuestionContext)


    const {} = useFinalQuestionLogic()

    console.log(typeof userWager)


    function computerAnswersQuestion() {
        let move = Math.floor(Math.random() * 100)
        return move % 2 === 0 || move % 3 === 0 || move % 5 === 0 ? "Correct" : "Incorrect"
        
    }

    function computerPlayersAnswers() {
        const player2Answer = computerAnswersQuestion()
        const player3Answer = computerAnswersQuestion()
        setTimeout(() => {
            if (player2Answer === "Correct") {
                        setPlayer2Score(prevScore => prevScore + player2Wager)
                        setPlayer2Move("Correct")
                    } else {
                        setPlayer2Score(prevScore => prevScore - player2Wager)
                        setPlayer2Move("Incorrect")
                    }
        }, 750)
        

        setTimeout(() => {
            if (player3Answer === "Correct") {
                        setPlayer3Score(prevScore => prevScore + player2Wager)
                        setPlayer3Move("Correct")
                    } else {
                        setPlayer3Score(prevScore => prevScore - player2Wager)
                        setPlayer3Move("Incorrect")
                    }
        }, 1500)
        
    }


    

    function handleClick(choice) {
        setSelectedQuestions(prevState => prevState + 1)
        computerPlayersAnswers()
        if (choice === finalQuestion[0].correct_answer) {
            setUserMove("Correct")
            setScore(prevScore => prevScore + userWager)
            // setAnswerResult("Correct")
            // // moveResetter()
            // setTimeout(() => {
            //     setAnswerResult()
                 
            // }, 750)    
        } else {
            setUserMove("InCorrect")
            setScore(prevScore => prevScore - userWager)
            setAnswerResult("Incorrect")
            setUserMove("Incorrect")
            // setTimeout(() => {
            //     setAnswerResult()
            // }, 750)
            
        }

        setClockStart(false)
        setTimeRemaining(START_TIME)
    }
    

    


    return (
        <div>
             <div className={styles.container} style={{display: selectedQuestions === 62 ? "block" : "none"}}>

              
               
                 <div className={styles.questionContainer} >
                    <h2>{finalQuestion && questionCleaner(finalQuestion[0].question)}</h2>
                    <span className={styles.timer} style={{visibility: timeRemaining <= 5 ? "visible" : 'hidden'}}>{timeRemaining}</span>
                </div>
            
            <div className={styles.choiceContainer} >
                <ul className={styles.list} >
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3])}</li>
                </ul>
            </div>
            </div>
        </div>
       
           
         
    )
}