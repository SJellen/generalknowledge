import React, { useEffect, useState } from 'react'


const Context = React.createContext()


function GameContextProvider({ children }) {


    const [isStart, setIsStart] = useState(true)

    




    return (
        <Context.Provider value={{isStart, setIsStart}}>
            { children }
        </Context.Provider>
    )
}

export { GameContextProvider, Context}