import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Bg2 from './assets/image/bg.png'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Preloader from './components/Preloader'
import { setGlobalState } from './store'
import { checkWalletStatus } from './utils/wallet'
const Home = lazy(async () => {
  // Wait one second before loading the component
  await wait(1000)

  // Import the Services component from the ./Views/Services module
  return import('./view/Home')
})

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/stars')
        const data = await res.json()
        setGlobalState('nfts', data.response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
    checkWalletStatus()

    // Return a clean-up function (optional)
    return () => {
      console.log('I am a clean-up function!')
    }
  }, [])

  return (
    <div
      className="text-white"
      style={{
        background: `linear-gradient(to left,rgba(0,0,0,0.80),rgba(0,0,0,0.97)),url(${Bg2}) no-repeat fixed center/cover`,
      }}
    >
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  )
}

function wait(waitTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime)
  })
}

export default App
