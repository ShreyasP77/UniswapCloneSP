import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'
import { useContext } from 'react'
import {TransactionContext}  from '../context/transactionContext'

const style = {
  wrapper: `w-screen text-white-600 body-font`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonsContainer: `flex w-1/4 justify-end inline-flex items-center`,
    button: ` flex items-center bg-[#191B1F] rounded-2xl mx-1 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `px-3 py-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`, }

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('swap')
    const { connectWallet, currentAccount } = useContext(TransactionContext)
  return (
    <header class={style.wrapper}>
  <div class="container-fluid mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
    <Image src={uniswapLogo} alt='uniswap' height={40} width={40} />
      <span class="ml-3 text-xl">SP-swap</span>
    </a>
    <nav class="md:ml-auto md:mr-3 py-2 flex flex-wrap items-center text-base justify-center">
      <div className={style.navItemsContainer}>
        <div
          onClick={() => setSelectedNav('swap')}
          className={`${style.navItem} ${
            selectedNav === 'swap' && style.activeNavItem
          }`}
        >
          Swap
        </div>
        <div
          onClick={() => setSelectedNav('pool')}
          className={`${style.navItem} ${
            selectedNav === 'pool' && style.activeNavItem
          }`}
        >
          Pool
        </div>
        <div
          onClick={() => setSelectedNav('vote')}
          className={`${style.navItem} ${
            selectedNav === 'vote' && style.activeNavItem
          }`}
        >
          Vote
        </div>
        <a
          href='https://info.uniswap.org/#/'
          target='_blank'
          rel='noreferrer'
        >
          <div className={style.navItem}>
            Charts <FiArrowUpRight />
          </div>
        </a>
      </div>
    </nav>

        < div className="md:ml-auto md:mr-1 flex flex-wrap items-center text-base justify-center">
      < div className={`${style.button} ${style.buttonPadding}`}>
        <div className={style.buttonIconContainer}>
          <Image src={ethLogo} alt='eth logo' height={20} width={20} />
        </div>
        <p className="px-1">Ethereum</p>
        <div className={style.buttonIconContainer}>
          {/* <AiOutlineDown /> */}
        </div>
      </div>
      {currentAccount ? (
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonTextContainer}>{currentAccount}</div>
        </div>
      ) : (
        <div
          onClick={() => connectWallet()}
          className="px-1 py-2"
        >
          <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
            Connect Wallet
          </div>
        </div>
      )}
      {/* <div className={`${style.button} ${style.buttonPadding}`}>
       <div className={`${style.buttonIconContainer} mx-2`}>
          <HiOutlineDotsVertical />
        </div>
      </div>  */}
    </div>
    
  </div>

</header>
  
  )
}

export default Header