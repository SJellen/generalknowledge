import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'username'

const GameContext = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [username, setUsername] = useState('')
    const [selectedQuestions, setSelectedQuestions] = useState(0)
    const [score, setScore] = useState(0)
    const [cost, setCost] = useState(0)
    


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (user) {
            setUsername(user)
        }

    }, [])

    




    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}