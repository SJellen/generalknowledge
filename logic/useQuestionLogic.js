import {useContext, useEffect} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'


const LOCAL_STORAGE_KEY_QC = 'qcount'

export default function useQuestionLogic() {

    const {currentQuestion,  setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, setScore, cost, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME} = useContext(GameContext)
    

  
    
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
            setTimeout(() => {
                setAnswerResult()
            }, 750)
        }
        setClockStart(false)
        setTimeRemaining(START_TIME)
        setCurrentQuestion()
        setSelectedQuestions(prevCount => prevCount + 1)
        
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

    }, [timeRemaining, clockStart])


    useEffect(() => {
        const questionCount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QC))
        if (questionCount) {
            setSelectedQuestions(questionCount)
        }
        localStorage.setItem(LOCAL_STORAGE_KEY_QC, JSON.stringify(selectedQuestions))
    }, [selectedQuestions])

    return {handleClick}
    
}