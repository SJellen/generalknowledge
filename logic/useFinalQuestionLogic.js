import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'



export default function useFinalQuestionLogic() {


    const {finalQuestion, currentQuestion, setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, timeRemaining, setSelectedQuestions, setScore, setAnswerResult, setUserMove, setPlayer2Score, setPlayer3Score, setTimeRemaining, clockStart, setClockStart, START_TIME, player2Move, setPlayer2Move, player3Move, setPlayer3Move,userMove,} = useContext(GameContext)


    function computerAnswersQuestion() {
        let move = Math.floor(Math.random() * 1000)
        return move % 2 === 0 || move % 5 === 0  ? "Correct" : "Incorrect"
        
    }

    function computerPlayersAnswers() {
        let player2Answer = computerAnswersQuestion()
        let player3Answer = computerAnswersQuestion()
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
                        setPlayer3Score(prevScore => prevScore + player3Wager)
                        setPlayer3Move("Correct")
                    } else {
                        setPlayer3Score(prevScore => prevScore - player3Wager)
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
        } else {
            setUserMove("InCorrect")
            setScore(prevScore => prevScore - userWager)
            setAnswerResult("Incorrect")
            setUserMove("Incorrect")
        }

        setClockStart(false)
        setTimeRemaining(START_TIME)
    }
    
    
    return {handleClick}

}