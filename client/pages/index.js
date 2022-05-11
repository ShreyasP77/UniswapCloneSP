import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

const style = {
  wrapper:`h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white flex flex-col justify-between`,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <Main/>
      <h2>Transaction History
        
      </h2>
      <p>sdgdfh</p>
      <p>lfgsl</p>
     </div>
  )
}
