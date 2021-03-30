import {useContext, useEffect} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


const LOCAL_STORAGE_KEY_QC = 'qcount'
const LOCAL_STORAGE_KEY_TURN = 'turn'

export default function useQuestionLogic() {

    const {currentQuestion,  setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, setScore, cost, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, currentTurn, setCurrentTurn, player2, player3, setPlayer2Score, setPlayer3Score, username, computerQuestionPicker, setShowButtons, player2Move, setPlayer2Move, player3Move, setPlayer3Move,userMove, setUserMove } = useContext(GameContext)

    



    // setturn to localstorage 
    
    function turnStorageSetter(player) {
        localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player))
        setCurrentTurn(player)
    }

    // clears visual moves

    function moveResetter() {
        
        setSelectedQuestions(prevCount => prevCount + 1)
        // localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
        setPlayer3Move()
        setPlayer2Move()
        setUserMove()
        setCurrentQuestion()
        
    }
    

    // player1 click on question answer
    
    function handleClick(choice) {
        // setSelectedQuestions(prevCount => prevCount + 1)
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
            setAnswerResult("Correct")
            moveResetter()
            setTimeout(() => {
                setAnswerResult()
                 
            }, 750)    
        } else {
            setScore(prevScore => prevScore - cost)
            // setAnswerResult("Incorrect")
            setUserMove("Incorrect")
            setTimeout(() => {
                // setAnswerResult()
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
        setShowButtons(false)
        // setSelectedQuestions(prevCount => prevCount + 1)   
        if (currentTurn !== username) {
            passToCurrentTurn()
        } else {
            passToPlayer2()
        }
        // setSelectedQuestions(prevCount => prevCount + 1)
    }

    // player1 click to play a cpu selected question

    function handlePlayClick() {
        turnStorageSetter(username)
        // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
        // setCurrentTurn(username)
        // setSelectedQuestions(prevCount => prevCount + 1)   
        setShowButtons(false)
        setTimeRemaining(START_TIME)
        setClockStart(true)
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
            
            // setSelectedQuestions(prevCount => prevCount + 1)
            setClockStart(false)
            setTimeRemaining(START_TIME)
        }

    }, [timeRemaining, clockStart])


   



    
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
        // console.log("passtocurrenmturn")

        if (currentTurn === player2) {
            let move = passOrPlay()
            // console.log(move)
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
                    // setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                } else {
                    setTimeout(() => {
                        setPlayer2Move("Incorrect")
                    }, 750)
                    setPlayer2Score(prevScore => prevScore - cost)
                    turnStorageSetter(player3)
                    // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                    // setCurrentTurn(player3)
                    
                    
                    let move = passOrPlay()
                    // console.log(move)
                    
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
                        // setSelectedQuestions(prevCount => prevCount + 1)
                        // computerQuestionPicker()
                        } else {
                            setTimeout(() => {
                                setPlayer3Move("Incorrect")
                            }, 750)
                            setPlayer3Score(prevScore => prevScore - cost)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                            turnStorageSetter(player2)
                            // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                            // setCurrentTurn(player2)
                            setCurrentQuestion()
                        }

                    } else {
                        setPlayer3Move("Pass")
                        turnStorageSetter(player2)
                        // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                        // setCurrentTurn(player2)
                        setTimeout(() => {
                            moveResetter()
                        }, 1000)
                        // setCurrentQuestion()
                        // setSelectedQuestions(prevCount => prevCount + 1)
                    }
                }

            } else {
                setPlayer2Move("Pass")
                turnStorageSetter(player3)
                // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                // setCurrentTurn(player3)

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
                        // setSelectedQuestions(prevCount => prevCount + 1)
                    } else {
                        setTimeout(() => {
                            setPlayer3Move("Incorrect")
                        }, 750)
                        setPlayer3Score(prevScore => prevScore - cost)
                        turnStorageSetter(player2)
                            // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                            // setCurrentTurn(player2)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                    }
                } else {
                    setPlayer3Move("Pass")
                    turnStorageSetter(player2)
                    // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                    // setCurrentTurn(player2)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                    
                    // setSelectedQuestions(prevCount => prevCount + 1)

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
                    // setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                } else {
                    setPlayer3Score(prevScore => prevScore - cost)
                    setTimeout(() => {
                        setPlayer3Move("Incorrect")
                    }, 750)
                    turnStorageSetter(player2)
                    // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                    // setCurrentTurn(player2)
                    
                    
                    
                    let move = passOrPlay()
                    // console.log(move)
                    
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
                        // setSelectedQuestions(prevCount => prevCount + 1)
                        // computerQuestionPicker()
                        } else {
                            setTimeout(() => {
                                setPlayer2Move("Incorrect")
                            }, 750)
                            setPlayer2Score(prevScore => prevScore - cost)
                            
                            setTimeout(() => {
                                moveResetter()
                                turnStorageSetter(username)
                                // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
                                // setCurrentTurn(username)
                            }, 1000)
                            
                        }

                    } else {
                        setPlayer2Move("Pass")
                        
                        setTimeout(() => {
                            moveResetter()
                            turnStorageSetter(username)
                            // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
                            // setCurrentTurn(username)
                        }, 1000)
                        // setSelectedQuestions(prevCount => prevCount + 1)
                    }
                }

            } else {
                setPlayer3Move("Pass")
                turnStorageSetter(player2)
                // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                // setCurrentTurn(player2)

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
                        // setSelectedQuestions(prevCount => prevCount + 1)
                    } else {
                        setTimeout(() => {
                            setPlayer2Move("Incorrect")
                        }, 750)
                        setPlayer2Score(prevScore => prevScore - cost)
                        turnStorageSetter(player3)
                            // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                            // setCurrentTurn(player3)
                            setTimeout(() => {
                                moveResetter()
                            }, 1000)
                    }
                } else {
                    setPlayer2Move("Pass")
                    turnStorageSetter(player3)
                    // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                    // setCurrentTurn(player3)
                    setTimeout(() => {
                        moveResetter()
                    }, 1000)
                    // setSelectedQuestions(prevCount => prevCount + 1)

                }

            }

        }
    }


 

    // console.log(selectedQuestions)

    // useEffect(() => {
    //     console.log(player2Move !== undefined ? player2Move : '')
    //     console.log(player3Move !== undefined ? player3Move : '')
    //     console.log(userMove !== undefined ? userMove : "")
    // }, [player3Move, player2Move, userMove])


    // useEffect(() => {
    //     const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
    //     if (questionCount) {
    //         setSelectedQuestions(questionCount)
    //     }
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
    // }, [selectedQuestions])


    

    return {handleClick, handlePassClick, passToPlayer2, handlePlayClick}

}