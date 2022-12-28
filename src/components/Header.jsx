import { RiShieldStarFill } from 'react-icons/ri'
import { useGlobalState } from '../store'
import { connectify } from '../utils/wallet'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const shortenAddress = (address) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`

  return (
    <header className="h-[4.5rem] w-full bg-[rgba(0,0,0,0.7)] sticky z-[500] top-0 left-0">
      <div className="max-w-6xl mx-auto flex items-center h-full justify-between max-lg:px-2">
        <div className="flex items-center">
          <RiShieldStarFill className="text-4xl text-pink-600" />
          <h1 className="text-white text-lg mx-1 font-[Bellota] font-bold max-md:hidden">
            Dapp Stars NFT
          </h1>
        </div>
        {connectedAccount ? (
          <button
            className="text-white text-[0.9rem] bg-gradient-to-r from-pink-500 to-indigo-800 
            py-1 px-5 rounded-lg font-[Opensans] hover:bg-gradient-to-r hover:from-pink-600
            hover:to-indigo-900 transition-color duration-100 focus:ring-0 focus:outline-none max-sm:px-3"
          >
            {shortenAddress(connectedAccount)}
          </button>
        ) : (
          <button
            className="text-white text-[0.9rem] bg-gradient-to-r from-pink-500 to-indigo-800 
            py-1 px-5 rounded-lg font-[Opensans] hover:bg-gradient-to-r hover:from-pink-600
            hover:to-indigo-900 transition-color duration-100 focus:ring-0 focus:outline-none max-sm:px-3"
            onClick={connectify}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
