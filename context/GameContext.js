import React, { useEffect, useState } from 'react'

// localStorage.clear();
// const LOCAL_STORAGE_KEY_USER = 'username'
const SESSION_STORAGE_KEY_USER = 'username'

const SESSION_STORAGE_KEY_QC = 'qcount'
const SESSION_STORAGE_KEY_P2 = 'player2'
const SESSION_STORAGE_KEY_P3 = 'player3'
const SESSION_STORAGE_KEY_TURN = 'turn'
const SESSION_STORAGE_KEY_USER_SCORE = 'score'
const SESSION_STORAGE_KEY_PLAYER2_SCORE = 'player2score'
const SESSION_STORAGE_KEY_PLAYER3_SCORE = 'player3score'

const GameContext = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [isRoundOne, setIsRoundOne] = useState(false)
    const [isRoundTwo, setIsRoundTwo] = useState(false)
    const [isRoundThree, setIsRoundThree] = useState(false)

    const [showInput, setShowInput] = useState(true)
    const [username, setUsername] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(0)
    const [score, setScore] = useState()
    const [cost, setCost] = useState(0)
    const [answerResult, setAnswerResult] = useState()
    



    const START_TIME = 11
    const PASS_PLAY_TIME = 7

    const [passPlayTime, setPassPlayTime] = useState(PASS_PLAY_TIME)
    const [passPlayStart, setPassPlayStart] = useState(false)

    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)
    const [timeRemainingFinal, setTimeRemainingFinal]  = useState(START_TIME)
    const [clockStartFinal, setClockStartFinal] = useState(false)




    const [player2, setPlayer2] = useState()
    const [player2Score, setPlayer2Score] = useState()
    const [player3, setPlayer3] = useState()
    const [player3Score, setPlayer3Score] = useState()


    const [currentTurn, setCurrentTurn] = useState()
    const [showButtons, setShowButtons] = useState(true)

    const [userMove, setUserMove] = useState()
    const [player2Move, setPlayer2Move] = useState()
    const [player3Move, setPlayer3Move] = useState()

    const [userWager, setUserWager] = useState()
    const [player2Wager, setPlayer2Wager] = useState()
    const [player3Wager, setPlayer3Wager] = useState()



   

    // username storage

    useEffect(() => {
        const userStorage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_USER))
        const player2Storage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_P2))
        const player3Storage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_P3))

        if (username) {
            sessionStorage.setItem(SESSION_STORAGE_KEY_USER, JSON.stringify(username))
        } else if (userStorage) {
            setUsername(userStorage)
        }
        if (player2) {
            sessionStorage.setItem(SESSION_STORAGE_KEY_P2, JSON.stringify(player2))
        } else if (player2Storage) {
            setPlayer2(player2Storage)
        } 
        if (player3) {
            sessionStorage.setItem(SESSION_STORAGE_KEY_P3, JSON.stringify(player3))
        } else if (player3Storage) {
            setPlayer3(player3Storage)
        }
       
    }, [username, player2, player3])

   

    // selected question count storage
    useEffect(() => {
        const questionCount = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
    }, [selectedQuestions])

    // get user score to storage
    useEffect(() => {
        
        const userScore = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_USER_SCORE))
        const player2ScoreStorage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_PLAYER2_SCORE))
        const player3ScoreStorage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_PLAYER3_SCORE))
        if (score) sessionStorage.setItem(SESSION_STORAGE_KEY_USER_SCORE, JSON.stringify(score))

        if (!score) {
            const userScore = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_USER_SCORE))
            setScore(userScore)
        }
        if (player2Score) sessionStorage.setItem(SESSION_STORAGE_KEY_PLAYER2_SCORE, JSON.stringify(player2Score))
        if (!player2Score) {
            const player2ScoreStorage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_PLAYER2_SCORE))
            setPlayer2Score(player2ScoreStorage)
        }
        if (player3Score) sessionStorage.setItem(SESSION_STORAGE_KEY_PLAYER3_SCORE, JSON.stringify(player3Score))
        if (!player3Score) {
            const player3ScoreStorage = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_PLAYER3_SCORE))
            setPlayer3Score(player3ScoreStorage)
        }


    },[score, player2Score, player3Score])
    // set userscore to storage
    // useEffect(() => {
    //     const userScore = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_USER_SCORE))
    //     if (userScore) {
    //         setScore(userScore)
    //     }
    // },[score])


    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
        
    // }, [selectedQuestions])



    // get current turn
    useEffect(() => {
        const turn = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY_TURN))
        if (currentTurn) {
            setCurrentTurn(turn)
        }
       

    }, [currentTurn])



    useEffect(() => {
        if (selectedQuestions === 30 || selectedQuestions === 60) {
            sessionStorage.setItem(SESSION_STORAGE_KEY_TURN, JSON.stringify(username))
            setCurrentTurn(username)
        }

    },[selectedQuestions])


    useEffect(() => {
        if (score < 0 && selectedQuestions === 30 || score < 0 && selectedQuestions === 60) {
            setIsRoundTwo(false)
            setIsRoundOne(false)
        }

    }, [score, selectedQuestions])


    function endGameStateReset() {

        setUsername()
        setScore()
        setPlayer2()
        setPlayer2Score()
        setPlayer3()
        setPlayer3Score()
        setIsRoundOne(false)
        setIsRoundTwo(false)
        setIsRoundOne(false)
        setIsStart(true)
        setSelectedQuestions(0)
        localStorage.clear()
        setShowInput(true)
    }


    function handleEndClick() {
        endGameStateReset()
    }

   

//    console.log(selectedQuestions)
    


    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3, player2Score, setPlayer2Score, player3Score, setPlayer3Score, currentTurn, setCurrentTurn, showButtons, setShowButtons, player2Move, setPlayer2Move, player3Move, setPlayer3Move, userMove, setUserMove, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, handleEndClick, passPlayTime, setPassPlayTime, passPlayStart, setPassPlayStart, PASS_PLAY_TIME, timeRemainingFinal, setTimeRemainingFinal, clockStartFinal, setClockStartFinal, isRoundOne, setIsRoundOne}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}