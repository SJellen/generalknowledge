import '../styles/globals.scss'
import Layout from '../components/Layout'
import {QuestionContextProvider } from '../context/QuestionContext'

function MyApp({ Component, pageProps }) {
  return (
    <QuestionContextProvider>
     <Layout >
        <Component {...pageProps} />
     </Layout>
     
    </QuestionContextProvider>
    
  )
  
}

export default MyApp
