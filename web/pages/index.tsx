import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div >
      <Head>
        <title>MrFarhan Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
           <main className={styles.main}>MrFarhan's Blog</main> 
      </Layout>

    </div>
  )
}
