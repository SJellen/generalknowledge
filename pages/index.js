import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Start from '../pages/start'

export default function Home() {
  return (
    <div className={styles.container}>
    
     <Start />
    
    </div>
  )
}
