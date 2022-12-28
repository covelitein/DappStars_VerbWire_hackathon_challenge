import Marquee from 'react-fast-marquee'
import { useGlobalState } from '../store'

const Nfts = () => {
  const [nfts] = useGlobalState('nfts')
  return (
    <div className="w-full h-[9rem]  cursor-pointer">
      <Marquee gradientWidth={0} pauseOnHover={true} speed={50}>
        {nfts.map((nft, i) => (
          <a
            href="https://testnets.opensea.io/collection/dappstarsv2"
            target="_blank"
            key={i}
            className="h-[8rem] w-[9rem] mx-2"
          >
            <img
              src={nft.image}
              className="h-full w-full object-cover rounded-md"
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}

export default Nfts
