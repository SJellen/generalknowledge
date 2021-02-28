import '../styles/globals.scss'
import Layout from '../components/Layout'
import { QuestionContextProvider } from '../context/QuestionContext'
import { GameContextProvider } from '../context/GameContext'

function MyApp({ Component, pageProps }) {
  return (
    <QuestionContextProvider>
    <GameContextProvider>
      <Layout >
        <Component {...pageProps} />
     </Layout>
    </GameContextProvider>
    </QuestionContextProvider>
  )
}

export default MyApp
