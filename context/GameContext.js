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
    const [showInput, setShowInput] = useState(true)
    const [username, setUsername] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(60)
    const [score, setScore] = useState(6000)
    const [cost, setCost] = useState(0)
    const [answerResult, setAnswerResult] = useState()
    const [isRoundTwo, setIsRoundTwo] = useState(false)
    const [isRoundThree, setIsRoundThree] = useState(false)



    const START_TIME = 11
    const PASS_PLAY_TIME = 7

    const [passPlayTime, setPassPlayTime] = useState(PASS_PLAY_TIME)
    const [passPlayStart, setPassPlayStart] = useState(false)

    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)

    const [player2, setPlayer2] = useState()
    const [player2Score, setPlayer2Score] = useState(6000)
    const [player3, setPlayer3] = useState()
    const [player3Score, setPlayer3Score] = useState(6000)


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
        const path = window.location.pathname
        if (path !== '/') {
            const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER))
        if (user) {
            setUsername(user)
        }
        const player2 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_P2))
        if (player2) {
            setPlayer2(player2)
        }
        const player3 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_P3))
        if (player3) {
            setPlayer3(player3)
        }
        }
    }, [])

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


    function handleEndClick() {
        setSelectedQuestions(0)
        localStorage.clear()
        // forceUpdate()
    }

   

   
    


    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3, player2Score, setPlayer2Score, player3Score, setPlayer3Score, currentTurn, setCurrentTurn, showButtons, setShowButtons, player2Move, setPlayer2Move, player3Move, setPlayer3Move, userMove, setUserMove, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, handleEndClick, passPlayTime, setPassPlayTime, passPlayStart, setPassPlayStart, PASS_PLAY_TIME}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}