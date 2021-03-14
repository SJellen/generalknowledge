import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY_USER = 'username'
const LOCAL_STORAGE_KEY_QC = 'qcount'

const GameContext = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [showInput, setShowInput] = useState(true)
    const [username, setUsername] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(29)
    const [score, setScore] = useState(0)
    const [cost, setCost] = useState(0)
    const [answerResult, setAnswerResult] = useState()
    const [isRoundTwo, setIsRoundTwo] = useState(false)
    const [isRoundThree, setIsRoundThree] = useState(false)


    const START_TIME = 8
    const [timeRemaining, setTimeRemaining]  = useState(START_TIME)
    const [clockStart, setClockStart] = useState(false)
    

    // username storage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER))
        if (user) {
            setUsername(user)
        }

    }, [])

    // selected question count storage
    useEffect(() => {
        const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
    }, [selectedQuestions])

    




    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput }}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}