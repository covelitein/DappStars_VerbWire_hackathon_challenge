import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Nfts from '../components/Nfts'
import OurTeam from '../components/OurTeam'
import Loader from '../components/Loader'
import Faq from '../components/Faq'
import PageScrollProgressBar from '../components/PageScrollProgressBar'
import MintNFT from '../components/MintNFT'

const Home = () => {
  return (
    <>
      <Header />
      <PageScrollProgressBar />
      <Hero />
      <Loader />
      <Nfts />
      <Faq />
      <OurTeam />
      <Footer />
      <MintNFT />
    </>
  )
}

export default Home
