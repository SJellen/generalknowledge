import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import {computerNamesList} from '../data/computerNames'

export default function useStartLogic() {

    const {setIsStart, setUsername, setShowInput,  setPlayer2, setPlayer3, setCurrentTurn, username, setIsRoundOne} = useContext(GameContext)
    const {roundOneCategories, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, roundTwoCategories,fetchSecondRoundQuestions, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, finalRoundCategory, fetchFinalQuestion} = useContext(QuestionContext)
    
    const [tempUser, setTempUser] = useState('Player 1')
    const [loading, setLoading] = useState(false)

    function getUniqueUsers() {
        let player2 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        let player3 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        if (player3 === player2) {
            player3 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        }
        setPlayer2(player2)
        setPlayer3(player3)
    }

    function handleChange(e) {
        let user = e.target.value
        setTempUser(user)
    }

    async function handleStartSubmit(e) {
        setLoading(true)
        e.preventDefault()
    
        setUsername(tempUser)
        setShowInput(false)
        await getUniqueUsers()
        // Helper function to delay execution because of API call limits
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    
        // Define a function to handle fetching questions with a delay
        const fetchQuestionWithDelay = async (category, setQuestion) => {
            await fetchFirstRoundQuestions(category, setQuestion);
            await delay(5000); // Delay for 5 seconds
        }
        
    
        // Fetch questions for the first round with delays
        for (let i = 0; i < roundOneCategories.length; i++) {
            await fetchQuestionWithDelay(roundOneCategories[i], eval(`setFirstRoundQuestion${i + 1}`))
        }

        // set loading to false to display the start game button
        setLoading(false)

        // Fetch questions for the second round with delays
        for (let i = 0; i < roundTwoCategories.length; i++) {
            await fetchQuestionWithDelay(roundTwoCategories[i], eval(`setSecondRoundQuestion${i + 1}`))
        }
    
        // Fetch the final question with a delay
        await fetchFinalQuestion(finalRoundCategory[0])

    }

    
    function handleStartGameClick() {
        setIsStart(false)
        setIsRoundOne(true)
        setCurrentTurn(username)
    }

    return {handleChange, handleStartSubmit, handleStartGameClick, loading}
    
}