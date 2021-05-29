import React, { useEffect, useState } from 'react'
// import useLocalStorageState from 'use-local-storage-state'

const GameContext = React.createContext()


function GameContextProvider({ children }) {

    // const [isStart, setIsStart] = useLocalStorageState('isStart', true)
    const [isStart, setIsStart] = useState(true)
    
    // const [isRoundOne, setIsRoundOne] = useLocalStorageState('isRoundOne', false)
    const [isRoundOne, setIsRoundOne] = useState(false)

    // const [isRoundTwo, setIsRoundTwo] = useLocalStorageState('isRoundTwo', false)
    const [isRoundTwo, setIsRoundTwo] = useState(false)

    // const [isRoundThree, setIsRoundThree] = useLocalStorageState('isRoundThree', false)
    const [isRoundThree, setIsRoundThree] = useState(false)

    const [showInput, setShowInput] = useState(true)

    // const [username, setUsername] = useLocalStorageState('username')
    const [username, setUsername] = useState()

    // const [selectedQuestions, setSelectedQuestions] = useLocalStorageState('question count', 0)
    const [selectedQuestions, setSelectedQuestions] = useState(0)

    // const [score, setScore] = useLocalStorageState('score', 0)
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

    // const [player2, setPlayer2] = useLocalStorageState('player2', )
    const [player2, setPlayer2] = useState()

    // const [player2Score, setPlayer2Score] = useLocalStorageState('player2score', 0)
    const [player2Score, setPlayer2Score] = useState(0)

    // const [player3, setPlayer3] = useLocalStorageState('player3', )
    const [player3, setPlayer3] = useState()


    // const [player3Score, setPlayer3Score] = useLocalStorageState('player3score', 0)
    const [player3Score, setPlayer3Score] = useState(0)


    // const [currentTurn, setCurrentTurn] = useLocalStorageState('turn',)
    const [currentTurn, setCurrentTurn] = useState()

    
    const [showButtons, setShowButtons] = useState(true)

    const [userMove, setUserMove] = useState()
    const [player2Move, setPlayer2Move] = useState()
    const [player3Move, setPlayer3Move] = useState()

    const [userWager, setUserWager] = useState()
    const [player2Wager, setPlayer2Wager] = useState()
    const [player3Wager, setPlayer3Wager] = useState()


    // round over and reset turn to user
    useEffect(() => {
        if (selectedQuestions === 30 || selectedQuestions === 60) {
            // sessionStorage.setItem(SESSION_STORAGE_KEY_TURN, JSON.stringify(username))
            setCurrentTurn(username)
        }
    },[selectedQuestions])

    // turns off rounds and helps end game when player ends round with negative score
    useEffect(() => {
        if (score < 0 && selectedQuestions === 30 || score < 0 && selectedQuestions === 60) {
            setIsRoundTwo(false)
            setIsRoundOne(false)
        }

    }, [score, selectedQuestions])

    useEffect(() => {
        // setUsername.reset()
        // setScore.reset()
        // setPlayer2.reset()
        // setPlayer2Score.reset()
        // setPlayer3.reset()
        // setPlayer3Score.reset()
        // setIsRoundOne.reset()
        // setIsRoundTwo.reset()
        // setIsRoundOne.reset()
        // setIsStart.reset()
        // setSelectedQuestions.reset()
    }, [])

    
    function endGameStateResetGameContext() {
        setUsername.reset()
        setScore.reset()
        setPlayer2.reset()
        setPlayer2Score.reset()
        setPlayer3.reset()
        setPlayer3Score.reset()
        setIsRoundOne.reset()
        setIsRoundTwo.reset()
        setIsRoundOne.reset()
        setIsStart(true)
        setSelectedQuestions.reset()
        setShowInput(true)
    }

    

    return (
        <GameContext.Provider value={{isStart, setIsStart, username, setUsername, selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, isRoundTwo, setIsRoundTwo, isRoundThree, setIsRoundThree, showInput, setShowInput, player2, setPlayer2, player3, setPlayer3, player2Score, setPlayer2Score, player3Score, setPlayer3Score, currentTurn, setCurrentTurn, showButtons, setShowButtons, player2Move, setPlayer2Move, player3Move, setPlayer3Move, userMove, setUserMove, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, passPlayTime, setPassPlayTime, passPlayStart, setPassPlayStart, PASS_PLAY_TIME, timeRemainingFinal, setTimeRemainingFinal, clockStartFinal, setClockStartFinal, isRoundOne, setIsRoundOne, endGameStateResetGameContext}}>
            { children }
        </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext}