import React, { useEffect, useState} from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'categories'


const QuestionContext = React.createContext()

function QuestionContextProvider({ children }) {

   
    const [shuffledArr, setShuffledArr] = useState([])
    const [roundOneCategories, setRoundOneCategories] = useState([])
    const [roundTwoCategories, setRoundTwoCategories] = useState([])
    const [finalRoundCategory, setFinalRoundCategory] = useState([])

    const [finalQuestion, setFinalQuestion] = useState()
    // const [firstRoundQuestions, setFirstRoundQuestions] = useState()

    const [firstRoundQuestion1, setFirstRoundQuestion1] = useState()
    const [firstRoundQuestion2, setFirstRoundQuestion2] = useState()
    const [firstRoundQuestion3, setFirstRoundQuestion3] = useState()
    const [firstRoundQuestion4, setFirstRoundQuestion4] = useState()
    const [firstRoundQuestion5, setFirstRoundQuestion5] = useState()
    const [firstRoundQuestion6, setFirstRoundQuestion6] = useState()

    // const [secondRoundQuestions, setSecondRoundQuestions] = useState()

    const [secondRoundQuestion1, setSecondRoundQuestion1] = useState()
    const [secondRoundQuestion2, setSecondRoundQuestion2] = useState()
    const [secondRoundQuestion3, setSecondRoundQuestion3] = useState()
    const [secondRoundQuestion4, setSecondRoundQuestion4] = useState()
    const [secondRoundQuestion5, setSecondRoundQuestion5] = useState()
    const [secondRoundQuestion6, setSecondRoundQuestion6] = useState()

    const [currentQuestion, setCurrentQuestion] = useState()

    const [shuffledQuestionsArr, setShuffledQuestionsArr] = useState()

    
    
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

    // get categories from storage if exist
    useEffect(() => {
        const randomCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (randomCategories) {
            setShuffledArr(randomCategories)
        } else if (randomCategories === null ) {
            let shuffle = getShuffledArr(categoryArr)
            setShuffledArr(shuffle)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shuffle))
        }
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
            .replace('&#039;','\'')
            .replace('&#039;','\'')
            .replace('&#039;','\'')
            .replace('&#039;','\'')
            .replace('&quot;','"')
            .replace('&quot;','"')
            .replace('&quot;','"')
            .replace('&quot;','"')
            .replace('&uuml;','ü')
            .replace('&eacute;','è')
            .replace('&eacute;','è')
            .replace('&rsquo;','\'')
            .replace('&pi;','𝜋 ')
            .replace('&amp;','&')
            .replace('&oacute;','õ')
            .replace('&ldquo;','"')
            .replace('&ldquo;','"')
            .replace('&rdquo;','"')
            .replace('&rdquo;','"')
            .replace('&hellip;','...')
            .replace('&ocirc;','ô')
        }
    }



    






    

   
    return (
        <QuestionContext.Provider value={{firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion,setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, getShuffledArr, roundOneCategories,
        fetchFirstRoundQuestions, questionCleaner, categoryFilterDifficulty, shuffledQuestionsArr, setShuffledQuestionsArr, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, roundTwoCategories, fetchSecondRoundQuestions, finalRoundCategory, fetchFinalQuestion, secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6}}>
            { children }
        </QuestionContext.Provider>
    )
}


export { QuestionContextProvider, QuestionContext }