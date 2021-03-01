import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'username'

const Context = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)
    const [username, setUsername] = useState('')
    


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (user) {
            setUsername(user)
        }

    }, [])

    




    return (
        <Context.Provider value={{isStart, setIsStart, username, setUsername}}>
            { children }
        </Context.Provider>
    )
}

export { GameContextProvider, Context}