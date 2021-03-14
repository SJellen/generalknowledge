import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import {computerNamesList} from '../data/computerNames'

const LOCAL_STORAGE_KEY_USER = 'username'
const LOCAL_STORAGE_KEY_P2 = 'player2'
const LOCAL_STORAGE_KEY_P3 = 'player3'


export default function useStartLogic() {

    const {setIsStart, setUsername, setShowInput,  setPlayer2, setPlayer3} = useContext(GameContext)
    const {roundOneCategories, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, roundTwoCategories,fetchSecondRoundQuestions, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, finalRoundCategory, fetchFinalQuestion} = useContext(QuestionContext)
    
    const [tempUser, setTempUser] = useState('')

    

    function getUniqueUsers() {
        let player2 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        let player3 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        if (player3 === player2) {
            player3 = computerNamesList[Math.floor(Math.random() * computerNamesList.length)]
        }
        localStorage.setItem(LOCAL_STORAGE_KEY_P2, JSON.stringify(player2))
        localStorage.setItem(LOCAL_STORAGE_KEY_P3, JSON.stringify(player3))
        setPlayer2(player2)
        setPlayer3(player3)
         
        
    }

    



    function handleChange(e) {
        let user = e.target.value
        setTempUser(user)
    }

    function handleStartSubmit(e) {
        e.preventDefault()
        setUsername(tempUser)
        localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(tempUser))
        setShowInput(false)
        fetchFirstRoundQuestions(roundOneCategories[0], setFirstRoundQuestion1)
        fetchFirstRoundQuestions(roundOneCategories[1], setFirstRoundQuestion2)
        fetchFirstRoundQuestions(roundOneCategories[2], setFirstRoundQuestion3)
        fetchFirstRoundQuestions(roundOneCategories[3], setFirstRoundQuestion4)
        fetchFirstRoundQuestions(roundOneCategories[4], setFirstRoundQuestion5)
        fetchFirstRoundQuestions(roundOneCategories[5], setFirstRoundQuestion6)
        fetchSecondRoundQuestions(roundTwoCategories[0], setSecondRoundQuestion1)
        fetchSecondRoundQuestions(roundTwoCategories[1], setSecondRoundQuestion2)
        fetchSecondRoundQuestions(roundTwoCategories[2], setSecondRoundQuestion3)
        fetchSecondRoundQuestions(roundTwoCategories[3], setSecondRoundQuestion4)
        fetchSecondRoundQuestions(roundTwoCategories[4], setSecondRoundQuestion5)
        fetchSecondRoundQuestions(roundTwoCategories[5], setSecondRoundQuestion6)
        fetchFinalQuestion(finalRoundCategory[0])
        getUniqueUsers()
    }


    function handleStartGameClick() {
        setIsStart(false)
        
    }




    return {handleChange, handleStartSubmit, handleStartGameClick}
    
}