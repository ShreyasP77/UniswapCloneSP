import React, { useEffect, useState } from 'react'

export const TransactionContext = React.createContext()

let eth

if (typeof window !== 'undefined') {
  eth = window.ethereum
}
export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // const router = useRouter()
    const [formData, setFormData] = useState({
      addressTo: '',
      amount: '',
    })


    useEffect(() => {
      checkIfWalletIsConnected()
    }, [])

    
    const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask ')

      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object.')
    }
}


const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask ')

      const accounts = await metamask.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object.')
    }
  }

   /**
   * Executes a transaction
   * @param {*} metamask Injected MetaMask code from the browser
   * @param {string} currentAccount Current user's address
   */
   
   
   
   const sendTransaction = async (
      metamask = eth,
      connectedAccount = currentAccount,
    ) => {
      try {
        if (!metamask) return alert('Please install metamask ')
        const { addressTo, amount } = formData
        const transactionContract = getEthereumContract()
  
        const parsedAmount = ethers.utils.parseEther(amount)
  
        await metamask.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: connectedAccount,
              to: addressTo,
              gas: '0x7EF40', // 520000 Gwei
              value: parsedAmount._hex,
            },
          ],
        })
  
        const transactionHash = await transactionContract.publishTransaction(
          addressTo,
          parsedAmount,
          `Transferring ETH ${parsedAmount} to ${addressTo}`,
          'TRANSFER',
        )
  
        setIsLoading(true)
  
        await transactionHash.wait()
  
        // await saveTransaction(
        //   transactionHash.hash,
        //   amount,
        //   connectedAccount,
        //   addressTo,
        // )
  
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    const handleChange = (e, name) => {
      setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
    }

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
