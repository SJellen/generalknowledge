import Question from '../components/Question'
import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
        <Head>
          <title>General Knowledge</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content="A general knowledge trivia game." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
       
        

        <main>
          {children}
        </main>
        <Question />

      </div>
    )
  }