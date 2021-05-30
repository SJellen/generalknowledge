import {useContext, useEffect} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'

export default function useQuestionLogic() {

    const {currentQuestion,  setCurrentQuestion} = useContext(QuestionContext)
    const {setSelectedQuestions, setScore, cost, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, currentTurn, setCurrentTurn, player2, player3, setPlayer2Score, setPlayer3Score, username, setShowButtons, setPlayer2Move, setPlayer3Move,setUserMove, passPlayTime, setPassPlayTime, passPlayStart, setPassPlayStart, PASS_PLAY_TIME} = useContext(GameContext)

    function turnStorageSetter(player) {
        setCurrentTurn(player)
    }

    // clears visual moves
    function moveResetter() {
        setSelectedQuestions(prevCount => prevCount + 1)
        setPlayer3Move()
        setPlayer2Move()
        setUserMove()
        setCurrentQuestion() 
    }
    

    // player1 click on question answer
    function handleClick(choice) {
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
            setAnswerResult("Correct")
            moveResetter()
            setTimeout(() => {
                setAnswerResult()
            }, 750)    
        } else {
            setScore(prevScore => prevScore - cost)
            setUserMove("Incorrect")
            setTimeout(() => {
            }, 750)
            passToPlayer2()
        }
        setClockStart(false)
        setTimeRemaining(START_TIME)
    }

    // player1 click to pass question 
    function handlePassClick() {
        setUserMove("Pass")
        setClockStart(false)
        setTimeRemaining(START_TIME)
        setPassPlayStart(false)
        setPassPlayTime(PASS_PLAY_TIME)
        setShowButtons(false)   
        if (currentTurn !== username) {
            passToCurrentTurn()
        } else {
            passToPlayer2()
        }
    }

    // player1 click to play a cpu selected question
    function handlePlayClick() {
        turnStorageSetter(username)  
        setShowButtons(false)
        setTimeRemaining(START_TIME)
        setClockStart(true)
        setPassPlayStart(false)
        setPassPlayTime(PASS_PLAY_TIME)
    }

  
    useEffect(() => {
        if (currentQuestion && timeRemaining && clockStart) {
            setTimeout(() => {
                setTimeRemaining(time => time === 0 ? 0 : time -1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setScore(prevScore => prevScore - cost)
            setUserMove("Incorrect")
            setAnswerResult("Incorrect")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            if (currentTurn !== username) {
                passToCurrentTurn()
            } else {
                passToPlayer2()
            }
            setClockStart(false)
            setTimeRemaining(START_TIME)
        }
    }, [timeRemaining, clockStart])


    useEffect(() => {
        if (currentQuestion && passPlayStart && passPlayTime) {
            setTimeout(() => {
                setPassPlayTime(time => time === 0 ? 0 : time -1)
            }, 1000)
        } else if (passPlayTime === 0) {
            passToCurrentTurn()
            setPassPlayStart(false)
            setPassPlayTime(PASS_PLAY_TIME)
        }
    }, [passPlayTime, passPlayStart, currentQuestion])


    function passOrPlay() {
        return Math.floor(Math.random() * 2) === 0 ? "Pass" : "Play"
    }

    function computerAnswersQuestion() {
        let move = Math.floor(Math.random() * 100)
        return move % 2 === 0 || move % 3 === 0 || move % 5 === 0 ? "Correct" : "Incorrect"
    }

    // player1 is current turn
    function passToPlayer2() {
            let move = passOrPlay()
            if (move === "Play") {
                turnStorageSetter(player2)
                setPlayer2Move("Play")
                let answer = computerAnswersQuestion()
                if (answer === "Correct") {
                    setTimeout(() => {
                        setPlayer2Move("Correct")
                    }, 750)
                    setPlayer2Score(prevScore => prevScore + cost)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setPlayer2Move("Incorrect")
                    }, 750)
                    turnStorageSetter(player3)
                    setPlayer2Score(prevScore => prevScore - cost)
                    let move = passOrPlay()
                    if (move === "Play") {
                        setPlayer3Move("Play")
                        let answer = computerAnswersQuestion()
                        if (answer === "Correct") {
                            setTimeout(() => {
                                setPlayer3Move("Correct")
                            }, 750)
                            setPlayer3Score(prevScore => prevScore + cost)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                        } else {
                            setTimeout(() => {
                                setPlayer3Move("Incorrect")
                            }, 750)
                            setPlayer3Score(prevScore => prevScore - cost)
                            setTimeout(() => {
                                moveResetter()
                                setCurrentTurn(username)
                            }, 1000) 
                        }
                    } else {
                        setPlayer3Move("Pass")
                        setTimeout(() => {
                            moveResetter()
                            setCurrentTurn(username)
                        }, 1000)
                    }
                }
            } else {
                turnStorageSetter(player3)
                setPlayer2Move("Pass")
                let move = passOrPlay()
                if (move === "Play") {
                    setPlayer3Move("Play")
                    let answer = computerAnswersQuestion()
                    if (answer === "Correct") {
                        setTimeout(() => {
                            setPlayer3Move("Correct")
                        }, 750)
                        setPlayer3Score(prevScore => prevScore + cost)
                        setTimeout(() => {
                            moveResetter()
                        }, 1000)
                    } else {
                        setTimeout(() => {
                            setPlayer3Move("Incorrect")
                        }, 750)
                        setPlayer3Score(prevScore => prevScore - cost)
                        setTimeout(() => {
                            moveResetter()
                            turnStorageSetter(username)
                        }, 1000)
                    }
                } else {
                    setPlayer3Move("Pass")
                    setTimeout(() => {
                        moveResetter()
                        turnStorageSetter(username)
                    }, 1000)
                }
                }
    }


    // player1 is not current turn

    function passToCurrentTurn() {
        if (currentTurn === player2) {
            let move = passOrPlay()
            if (move === "Play") {
                setPlayer2Move("Play")
                let answer = computerAnswersQuestion()
                if (answer === "Correct") {
                    setTimeout(() => {
                        setPlayer2Move("Correct")
                    }, 750)
                    setPlayer2Score(prevScore => prevScore + cost)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setPlayer2Move("Incorrect")
                    }, 750)
                    setPlayer2Score(prevScore => prevScore - cost)
                    turnStorageSetter(player3)
                    let move = passOrPlay()
                    if (move === "Play") {
                        setPlayer3Move("Play")
                        let answer = computerAnswersQuestion()
                        if (answer === "Correct") {
                            setTimeout(() => {
                                setPlayer3Move("Correct")
                            }, 750)
                            setPlayer3Score(prevScore => prevScore + cost)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                        } else {
                            setTimeout(() => {
                                setPlayer3Move("Incorrect")
                            }, 750)
                            setPlayer3Score(prevScore => prevScore - cost)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                            turnStorageSetter(player2)
                            setCurrentQuestion()
                        }
                    } else {
                        setPlayer3Move("Pass")
                        turnStorageSetter(player2)
                        setTimeout(() => {
                            moveResetter()
                        }, 1000)
                    }
                }
            } else {
                setPlayer2Move("Pass")
                turnStorageSetter(player3)
                let move = passOrPlay()
                if (move === "Play") {
                    setPlayer3Move("Play")
                    let answer = computerAnswersQuestion()
                    if (answer === "Correct") {
                        setTimeout(() => {
                            setPlayer3Move("Correct")
                        }, 750)
                        setPlayer3Score(prevScore => prevScore + cost)
                        setTimeout(() => {
                            moveResetter()
                        }, 1000)
                    } else {
                        setTimeout(() => {
                            setPlayer3Move("Incorrect")
                        }, 750)
                        setPlayer3Score(prevScore => prevScore - cost)
                        turnStorageSetter(player2)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                    }
                } else {
                    setPlayer3Move("Pass")
                    turnStorageSetter(player2)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                }
            }
        } else {
            let move = passOrPlay()
            if (move === "Play") {
                setPlayer3Move("Play")
                let answer = computerAnswersQuestion()
                if (answer === "Correct") {
                    setTimeout(() => {
                        setPlayer3Move("Correct")
                    }, 750)
                    setPlayer3Score(prevScore => prevScore + cost)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                } else {
                    setPlayer3Score(prevScore => prevScore - cost)
                    setTimeout(() => {
                        setPlayer3Move("Incorrect")
                    }, 750)
                    turnStorageSetter(player2)
                    let move = passOrPlay()
                    if (move === "Play") {
                        setPlayer2Move("Play")
                        let answer = computerAnswersQuestion()
                        if (answer === "Correct") {
                            setTimeout(() => {
                                setPlayer2Move("Correct")
                            }, 750)
                            setPlayer2Score(prevScore => prevScore + cost)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                        } else {
                            setTimeout(() => {
                                setPlayer2Move("Incorrect")
                            }, 750)
                            setPlayer2Score(prevScore => prevScore - cost)
                            setTimeout(() => {
                                moveResetter()
                                turnStorageSetter(username)
                            }, 1000)  
                        }
                    } else {
                        setPlayer2Move("Pass")
                        setTimeout(() => {
                            moveResetter()
                            turnStorageSetter(username)
                        }, 1000)
                    }
                }
            } else {
                setPlayer3Move("Pass")
                turnStorageSetter(player2)
                let move = passOrPlay()
                if (move === "Play") {
                    setPlayer2Move("Play")
                    let answer = computerAnswersQuestion()
                    if (answer === "Correct") {
                        setTimeout(() => {
                            setPlayer2Move("Correct")
                        }, 750)
                        setPlayer2Score(prevScore => prevScore + cost)
                        setTimeout(() => {
                            moveResetter()
                        }, 1000)
                    } else {
                        setTimeout(() => {
                            setPlayer2Move("Incorrect")
                        }, 750)
                        setPlayer2Score(prevScore => prevScore - cost)
                        turnStorageSetter(player3)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                    }
                } else {
                    setPlayer2Move("Pass")
                    turnStorageSetter(player3)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                }
            }
        }
    }

    return {handleClick, handlePassClick, passToPlayer2, handlePlayClick}

}