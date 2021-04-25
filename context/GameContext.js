import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY_USER = 'username'
const LOCAL_STORAGE_KEY_QC = 'qcount'
const LOCAL_STORAGE_KEY_P2 = 'player2'
const LOCAL_STORAGE_KEY_P3 = 'player3'
const LOCAL_STORAGE_KEY_TURN = 'turn'

const GameContext = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [isRoundOne, setIsRoundOne] = useState(false)
    const [isRoundTwo, setIsRoundTwo] = useState(false)
    const [isRoundThree, setIsRoundThree] = useState(false)

    const [showInput, setShowInput] = useState(true)
    const [username, setUsername] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(0)
    const [score, setScore] = useState(0)
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
    const [player2Score, setPlayer2Score] = useState(0)
    const [player3, setPlayer3] = useState()
    const [player3Score, setPlayer3Score] = useState(0)


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
        const userStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER))
        const player2Storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_P2))
        const player3Storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_P3))

        if (username) {
            localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(username))
        } else if (userStorage) {
            setUsername(userStorage)
        }
        if (player2) {
            localStorage.setItem(LOCAL_STORAGE_KEY_P2, JSON.stringify(player2))
        } else if (player2Storage) {
            setPlayer2(player2Storage)
        } 
        if (player3) {
            localStorage.setItem(LOCAL_STORAGE_KEY_P3, JSON.stringify(player3))
        } else if (player3Storage) {
            setPlayer3(player3Storage)
        }
       
    }, [username, player2, player3])

   

    // selected question count storage
    

    useEffect(() => {
        const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
    }, [selectedQuestions])


    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
        
    // }, [selectedQuestions])



    // get current turn
    useEffect(() => {
        const turn = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TURN))
        if (currentTurn) {
            setCurrentTurn(turn)
        }
       

    }, [currentTurn])



    useEffect(() => {
        if (selectedQuestions === 30 || selectedQuestions === 60) {
            localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(username))
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

   

   console.log(selectedQuestions)
    


    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3, player2Score, setPlayer2Score, player3Score, setPlayer3Score, currentTurn, setCurrentTurn, showButtons, setShowButtons, player2Move, setPlayer2Move, player3Move, setPlayer3Move, userMove, setUserMove, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, handleEndClick, passPlayTime, setPassPlayTime, passPlayStart, setPassPlayStart, PASS_PLAY_TIME, timeRemainingFinal, setTimeRemainingFinal, clockStartFinal, setClockStartFinal, isRoundOne, setIsRoundOne}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}