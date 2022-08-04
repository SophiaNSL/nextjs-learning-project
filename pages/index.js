import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
         <title>List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Next.js Learning Project</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis blanditiis tenetur nostrum harum debitis maxime possimus perspiciatis libero! Labore fugiat magni modi, itaque animi ipsa corporis. Illum, quae fuga?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam pariatur autem qui, eius similique reprehenderit blanditiis iure fugiat tenetur!</p>
        <Link href="/list">
          <a className={styles.btn}>See users list</a>  
        </Link>
      </div>
    </>
    
  )
}
