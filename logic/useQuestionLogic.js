import {useContext, useEffect} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


const LOCAL_STORAGE_KEY_QC = 'qcount'
const LOCAL_STORAGE_KEY_TURN = 'turn'

export default function useQuestionLogic() {

    const {currentQuestion,  setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, setScore, cost, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME, currentTurn, setCurrentTurn, player2, player3} = useContext(GameContext)
    

  
    
    function handleClick(choice) {
        
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
            setAnswerResult("correct")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            
        } else {
            setScore(prevScore => prevScore - cost)
            setAnswerResult("incorrect")
            setCurrentTurn(player2)
            setTimeout(() => {
                setAnswerResult()
            }, 750)
        }
        setClockStart(false)
        setTimeRemaining(START_TIME)
        setCurrentQuestion()
        setSelectedQuestions(prevCount => prevCount + 1)
        
    }

    function handlePassClick() {
        localStorage.setItem(LOCAL_STORAGE_KEY_TURN, JSON.stringify(player2))
        setCurrentTurn(player2)
        setClockStart(false)
        setTimeRemaining(START_TIME)

    }

    useEffect(() => {
        if (currentQuestion && timeRemaining && clockStart) {
            setTimeout(() => {
                setTimeRemaining(time => time === 0 ? 0 : time -1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setScore(prevScore => prevScore - cost)
            setAnswerResult("incorrect")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            setCurrentQuestion()
            setSelectedQuestions(prevCount => prevCount + 1)
            setClockStart(false)
            setTimeRemaining(START_TIME)
        }

    }, [timeRemaining, clockStart, currentTurn])


    useEffect(() => {
        const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
        localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
    }, [selectedQuestions])



    
    function passOrPlay() {
        return Math.floor(Math.random() * 2) === 0 ? "pass" : "play"
    }

    console.log(passOrPlay())



    useEffect(() => {
        if (currentTurn === player2) {

        }

    }, [currentTurn])

    return {handleClick, handlePassClick}
    
}