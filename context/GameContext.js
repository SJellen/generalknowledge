import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'username'

const GameContext = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [username, setUsername] = useState('')
    const [tempUser, setTempUser] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(0)
    const [score, setScore] = useState(0)
    const [cost, setCost] = useState(0)
    const [answerResult, setAnswerResult] = useState()


    const START_TIME = 6
    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)
    


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (user) {
            setUsername(user)
        }

    }, [])

    




    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME }}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}