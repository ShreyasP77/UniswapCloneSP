import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'
import { useContext } from 'react'
import { TransactionContext } from '../context/transactionContext'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
// import TransactionLoader from './TransactionLoader'

Modal.setAppElement('#__next')

const style = {
    wrapper: `w-screen h-min flex items-end justify-center text-white body-font`,
    content: `bg-[#191B1F] w-[30rem] rounded-2xl p-2`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-lg`,
    transferPropContainer: `bg-[#20242A] my-2 rounded-2xl p-2 text-xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] my-1s outline-none w-full text-lg`,
    currencySelector: `flex w-1/5`,
    currencySelectorContent: ` h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-lg font-small cursor-pointer p-1 mt-[-0.1rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-2 px-2 text-lg font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const customStyles = {
    content: {
        position:'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#0a0b0d',
        padding: 0,
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
}
const Main = () => {
    console.log(useContext(TransactionContext))
    const { formData, handleChange, sendTransaction } = useContext(TransactionContext)
    // const router = useRouter()
console.log(formData, handleChange, sendTransaction)
    const handleSubmit = async (e) => {
        console.log(formData, handleChange, sendTransaction)
        const { addressTo, amount } = formData
        e.preventDefault()

        if (!addressTo || !amount) return 
        sendTransaction()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.formHeader}>
                    <div>Swap</div>
                    <div>
                        <RiSettings3Fill />
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type='text'
                        className={style.transferPropInput}
                        placeholder='0.0'
                        pattern='^[0-9]*[.,]?[0-9]*$'
                        onChange={e => handleChange(e, 'amount')}
                    />
                    <div className={style.currencySelector}>
                        <div className={style.currencySelectorContent}>
                            <div className={style.currencySelectorIcon}>
                                <Image src={ethLogo} alt='eth logo' height={20} width={20} />
                            </div>
                            <div className={style.currencySelectorTicker}>ETH</div>
                            {/* <AiOutlineDown className={style.currencySelectorArrow} /> */}
                        </div>
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type='text'
                        className={style.transferPropInput}
                        placeholder='0x...'
                        onChange={e => handleChange(e, 'addressTo')}
                    />
                    <div className={style.currencySelector}></div>
                </div>
                <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
                    Confirm
                </div>
            </div>

            {/* <Modal isOpen={!!router.query.loading} style={customStyles}> */}
                {/* <TransactionLoader /> */}
            {/* </Modal> */}
        </div>
    )
}

export default Main