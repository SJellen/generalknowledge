import {useContext, useEffect} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


const LOCAL_STORAGE_KEY_QC = 'qcount'
const LOCAL_STORAGE_KEY_TURN = 'turn'

export default function useQuestionLogic() {

    const {currentQuestion,  setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, setScore, cost, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, currentTurn, setCurrentTurn, player2, player3, setPlayer2Score, setPlayer3Score, username, computerQuestionPicker} = useContext(GameContext)
    

    // player1 click on question answer
    
    function handleClick(choice) {
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
            setAnswerResult("correct")
            setTimeout(() => {
                setAnswerResult()
            }, 750)    
        } else {
            setScore(prevScore => prevScore - cost)
            setAnswerResult("incorrect")
            // setCurrentTurn(player2)
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            passToPlayer2()
        }
        setClockStart(false)
        setTimeRemaining(START_TIME)
        setCurrentQuestion()
        setSelectedQuestions(prevCount => prevCount + 1)   
    }

    // player1 click to pass question 

    function handlePassClick() {
        // localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
        // setCurrentTurn(player2)
        setClockStart(false)
        setTimeRemaining(START_TIME)
        if (currentTurn !== username) {
            passToCurrentTurn()
        } else {
            passToPlayer2()
        }
        
    }

    // player1 click to play a cpu selected question

    function handlePlayClick() {
        localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
        setCurrentTurn(username)
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
            setAnswerResult("incorrect")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            setCurrentQuestion()
            setSelectedQuestions(prevCount => prevCount + 1)
            setClockStart(false)
            setTimeRemaining(START_TIME)
        }

    }, [timeRemaining, clockStart])


    useEffect(() => {
        const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
        localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
    }, [selectedQuestions])



    
    function passOrPlay() {
        return Math.floor(Math.random() * 2) === 0 ? "pass" : "play"
    }

    function computerAnswersQuestion() {
        let move = Math.floor(Math.random() * 100)
        return move % 2 === 0 || move % 3 === 0 || move % 5 === 0 ? "correct" : "incorrect"
        
    }

    // player1 is current turn

    function passToPlayer2() {
            
            let move = passOrPlay()
            // console.log(move)
            
            if (move === "play") {
                localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                setCurrentTurn(player2)
                
                let answer = computerAnswersQuestion()
                if (answer === "correct") {
                    setPlayer2Score(prevScore => prevScore + cost)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                } else {
                    localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                    setCurrentTurn(player3)
                    setPlayer2Score(prevScore => prevScore - cost)
                    
                    let move = passOrPlay()
                    // console.log(move)
                    
                    if (move === "play") {
                        let answer = computerAnswersQuestion()

                        if (answer === "correct") {
                        setPlayer3Score(prevScore => prevScore + cost)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                        // computerQuestionPicker()
                        } else {
                            setPlayer3Score(prevScore => prevScore - cost)
                            setCurrentTurn(username)
                        }

                    } else {
                        setCurrentTurn(username)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                    }
                }


            } else {
                localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                setCurrentTurn(player3)

                let move = passOrPlay()
                // console.log(move)
                if (move === "play") {
                    // setCurrentTurn(player3)
                    let answer = computerAnswersQuestion()

                    if (answer === "correct") {
                    setPlayer3Score(prevScore => prevScore + cost)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                    } else {
                    setPlayer3Score(prevScore => prevScore - cost)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                    setCurrentTurn(username)
                    }

                } else {
                    setCurrentTurn(username)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                }

                }
    
       
    }


    // player1 is not current turn

    function passToCurrentTurn() {
        if (currentTurn === player2) {
            let move = passOrPlay()
            if (move === "play") {
                let answer = computerAnswersQuestion()
                if (answer === "correct") {
                    setPlayer2Score(prevScore => prevScore + cost)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                } else {
                    localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player3))
                    setCurrentTurn(player3)
                    setPlayer2Score(prevScore => prevScore - cost)
                    
                    let move = passOrPlay()
                    // console.log(move)
                    
                    if (move === "play") {
                        let answer = computerAnswersQuestion()

                        if (answer === "correct") {
                        setPlayer3Score(prevScore => prevScore + cost)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                        // computerQuestionPicker()
                        } else {
                            setPlayer3Score(prevScore => prevScore - cost)
                            localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                            setCurrentTurn(player2)
                        }

                    } else {
                        localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                        setCurrentTurn(player2)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                    }
                }

            }

        } else {
            let move = passOrPlay()
            if (move === "play") {
                let answer = computerAnswersQuestion()
                if (answer === "correct") {
                    setPlayer3Score(prevScore => prevScore + cost)
                    setCurrentQuestion()
                    setSelectedQuestions(prevCount => prevCount + 1)
                    // computerQuestionPicker()
                } else {
                    localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
                    setCurrentTurn(player2)
                    setPlayer3Score(prevScore => prevScore - cost)
                    
                    let move = passOrPlay()
                    // console.log(move)
                    
                    if (move === "play") {
                        let answer = computerAnswersQuestion()

                        if (answer === "correct") {
                        setPlayer2Score(prevScore => prevScore + cost)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                        // computerQuestionPicker()
                        } else {
                            setPlayer2Score(prevScore => prevScore - cost)
                            localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
                            setCurrentTurn(username)
                        }

                    } else {
                        localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
                        setCurrentTurn(username)
                        setCurrentQuestion()
                        setSelectedQuestions(prevCount => prevCount + 1)
                    }
                }

            }

        }
    }


 

    


    

    return {handleClick, handlePassClick, passToPlayer2, handlePlayClick}
    
}