import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja | Home</title>
    </Head>
   <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Anim adipisicing nostrud sint qui irure occaecat consequat cupidatat ad sit eu voluptate.</p>
     <p className={styles.text}>Anim adipisicing nostrud sint qui irure occaecat consequat cupidatat ad sit eu voluptate.</p>
    
     <Link href="/ninjas"><a className={styles.btn}>Ninja Listing</a></Link>

   </div>
   </>
  )
}
