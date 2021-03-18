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
    const [selectedQuestions, setSelectedQuestions] = useState(0)
    const [score, setScore] = useState(0)
    const [cost, setCost] = useState(0)
    const [answerResult, setAnswerResult] = useState()
    const [isRoundTwo, setIsRoundTwo] = useState(false)
    const [isRoundThree, setIsRoundThree] = useState(false)




    const START_TIME = 11
    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)

    



    const [player2, setPlayer2] = useState()
    const [player2Score, setPlayer2Score] = useState(0)
    const [player3, setPlayer3] = useState()
    const [player3Score, setPlayer3Score] = useState(0)


    const [currentTurn, setCurrentTurn] = useState()

    const [showButtons, setShowButtons] = useState(true)

    

    


    

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

    // get current turn
    useEffect(() => {
        const turn = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TURN))
        if (currentTurn) {
            setCurrentTurn(turn)
        }
       

    }, [currentTurn])

    

    


    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3, player2Score, setPlayer2Score, player3Score, setPlayer3Score, currentTurn, setCurrentTurn, showButtons, setShowButtons}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}