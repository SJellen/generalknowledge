import React, { useEffect, useState} from 'react'
import useLocalStorageState from 'use-local-storage-state'


const QuestionContext = React.createContext()

function QuestionContextProvider({ children }) {

    const [shuffledArr, setShuffledArr] = useLocalStorageState('categories',[])
    const [roundOneCategories, setRoundOneCategories] = useLocalStorageState('roundOneCategories',[])
    const [roundTwoCategories, setRoundTwoCategories] = useLocalStorageState('roundTwoCategories',[])
    const [finalRoundCategory, setFinalRoundCategory] = useLocalStorageState('finalRoundCategories',[])



    const [finalQuestion, setFinalQuestion] = useState()

    const [firstRoundQuestion1, setFirstRoundQuestion1] = useState()
    const [firstRoundQuestion2, setFirstRoundQuestion2] = useState()
    const [firstRoundQuestion3, setFirstRoundQuestion3] = useState()
    const [firstRoundQuestion4, setFirstRoundQuestion4] = useState()
    const [firstRoundQuestion5, setFirstRoundQuestion5] = useState()
    const [firstRoundQuestion6, setFirstRoundQuestion6] = useState()

    const [secondRoundQuestion1, setSecondRoundQuestion1] = useState()
    const [secondRoundQuestion2, setSecondRoundQuestion2] = useState()
    const [secondRoundQuestion3, setSecondRoundQuestion3] = useState()
    const [secondRoundQuestion4, setSecondRoundQuestion4] = useState()
    const [secondRoundQuestion5, setSecondRoundQuestion5] = useState()
    const [secondRoundQuestion6, setSecondRoundQuestion6] = useState()

    const [currentQuestion, setCurrentQuestion] = useState()
    const [shuffledQuestionsArr, setShuffledQuestionsArr] = useState()

    const [finalQuestionShuffledArr, setFinalQuestionShuffledArr] = useState()

    const categoryArr = [9,10,11,12, 13,14,15,16,17,18,19,20,21,22,23,24,25,26, 27,28,29,30,31,32]

    // shuffle categories
    const getShuffledArr = arr => {
            const newArr = arr.slice()
            for (let i = newArr.length - 1; i > 0; i--) {
                const rand = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
            }
            return newArr
        }

  

    useEffect(() => {
        let shuffle = getShuffledArr(categoryArr)
            setShuffledArr(shuffle)
    }, [])
    
  
    // get categories for each round
    function categoryCreator() {
        let tempArr = shuffledArr
        const firstArr = tempArr.slice(0,6)
        const secondArr = tempArr.slice(6,12)
        const finalArr = tempArr.slice(-1)
        setRoundOneCategories(firstArr)
        setRoundTwoCategories(secondArr)
        setFinalRoundCategory(finalArr)
    }

    useEffect(() => {
            categoryCreator()
    }, [shuffledArr])  
    
    

     
    const fetchFinalQuestion = async (cat) => {
        await fetch(`https://opentdb.com/api.php?amount=1&category=${cat}&difficulty=hard&type=multiple`)
            .then(res => res.json())
            .then(data => 
                setFinalQuestion(data.results))
            .catch(error => console.log(error))  
    }


    const fetchFirstRoundQuestions = async (cat, set) => {
        await fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&type=multiple`)
        .then(res => res.json())
        .then(data => {
            let sortedData = categoryFilterDifficulty(data.results)
            set(sortedData)
        })   
        .catch(error => console.log(error))    
    }

   
    const fetchSecondRoundQuestions = async (cat, set) => {
        await fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&type=multiple`)
        .then(res => res.json())
        .then(data => {
            let sortedData = categoryFilterDifficulty(data.results)
            set(sortedData)
        }) 
        .catch(error => console.log(error))    
    }


    // sort categories by difficulty
    function categoryFilterDifficulty(arr) {
        let easyArr = arr?.filter(x => x.difficulty === "easy")
        let mediumArr = arr?.filter(x => x.difficulty === "medium")
        let hardArr = arr?.filter(x => x.difficulty === "hard")
        return [...easyArr, ...mediumArr, ...hardArr]
    }
    

    function categoryCleaner(str) {
        if (str !== undefined) {
            return str.replace(/(^\w+:|^)\/\//, '')
            .replace('Entertainment: ','')
            .replace('Knowledge','')
            .replace('Science: ','')
            .replace('& Manga','')
            .replace('Japanese ','')
            .replace('Cartoon & Animations','Animation')
            .replace('Science & Nature','Nature')
            .replace(' & Theatres','')
        }
    }

    function questionCleaner(str) {
        if (str !== undefined) {
            return str.replace(/(^\w+:|^)\/\//, '')
            .replaceAll('&rdquo;', '"')
            .replaceAll('&#039;','\'')
            .replaceAll('&quot;','"')
            .replaceAll('&uuml;','ü')
            .replaceAll('&eacute;','è')
            .replaceAll('&rsquo;','\'')
            .replaceAll('&pi;','𝜋 ')
            .replaceAll('&amp;','&')
            .replaceAll('&oacute;','õ')
            .replaceAll('&ldquo;','"')
            .replaceAll('&hellip;','...')
            .replaceAll('&ocirc;','ô')
            .replaceAll('&oumlo;','ö')
            .replaceAll('&egrave;','è')
        }
    }

    function endGameStateResetQuestionContext() {
        setShuffledArr.reset()
        setRoundOneCategories.reset()
        setRoundTwoCategories.reset()
        setFinalRoundCategory.reset()
        let shuffle = getShuffledArr(categoryArr)
            setShuffledArr(shuffle)
    }


    // final question set and cleanup
    useEffect(() => {
        const questionArr = finalQuestion && [...finalQuestion[0]?.incorrect_answers, finalQuestion[0].correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setFinalQuestionShuffledArr(shuffledQuestions)  
}, [finalQuestion])


   
    return (
        <QuestionContext.Provider value={{firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion,setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, getShuffledArr, roundOneCategories,
        fetchFirstRoundQuestions, questionCleaner, categoryFilterDifficulty, shuffledQuestionsArr, setShuffledQuestionsArr, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, roundTwoCategories, fetchSecondRoundQuestions, finalRoundCategory, fetchFinalQuestion, secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6, finalQuestion, finalQuestionShuffledArr, setFinalQuestionShuffledArr, endGameStateResetQuestionContext}}>
            { children }
        </QuestionContext.Provider>
    )
}

export { QuestionContextProvider, QuestionContext }