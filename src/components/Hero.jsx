import { setGlobalState } from '../store'

const Hero = () => {
  return (
    <div className="min-h-[70vh] w-full flex justify-center items-center">
      <div className="text-white w-[40rem] flex flex-col items-center">
        <h1 className="font-[Opensans] text-5xl text-center max-sm:text-2xl max-sm:px-2 font-bold mb-2">
          Dapp Stars NFT
        </h1>
        <h2 className="font-[Opensans] text-2xl text-center my-1 max-sm:text-lg">
          Best collections for the stars
        </h2>
        <p className="text-center text-[0.85rem] font-[Opensans] text-gray-300 mt-3 px-3 max-sm:text-[0.8rem]">
          Introducing Dapp-Stars-NFT, the premier minting dapp for creating and
          trading unique digital assets. Join the growing community of artists
          and collectors on the cutting edge of the NFT revolution. mint your
          own one-of-a-kind creations today!
        </p>
        <button
          className="text-white text-[0.9rem] bg-gradient-to-r from-pink-500 to-indigo-800
          py-1 px-5 rounded-md font-[Opensans] mt-3 hover:bg-gradient-to-r hover:from-pink-600
          hover:to-indigo-900 transition-color duration-100 focus:ring-0 focus:outline-none"
          onClick={() => setGlobalState('mintModal', 'scale-100')}
        >
          Mint Nfts
        </button>
      </div>
    </div>
  )
}

export default Hero
