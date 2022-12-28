import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RiShieldStarFill } from 'react-icons/ri'
import { setGlobalState, useGlobalState } from '../store'

const MintNFT = () => {
  const [mintModal] = useGlobalState('mintModal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const changeImage = async (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result
      setImgBase64(file)
      setFileUrl(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !price || !description || !fileUrl) return

    setGlobalState('AddToursModalOpacity', 'opacity-100')
    setGlobalState('AddToursVisibility', 'visible')
    setGlobalState('AddTourModalTranslate', 'translate-y-0')
    setGlobalState('mintModal', 'scale-0')

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('recipientAddress', connectedAccount)
    formData.append('image', fileUrl)

    await fetch('http://localhost:8000/process', {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => res.json())
      .then(async (res) => {
        console.log(res)
        setGlobalState('AddToursModalOpacity', 'opacity-0')
        setGlobalState('AddToursVisibility', 'invisible')
        setGlobalState('AddTourModalTranslate', '-translate-y-5')
        closeModal()

        window.location.reload()
        setGlobalState('nfts', data.response)
      })
      .catch(() => {
        setGlobalState('AddToursModalOpacity', 'opacity-0')
        setGlobalState('AddToursVisibility', 'invisible')
        setGlobalState('AddTourModalTranslate', '-translate-y-5')
        setGlobalState('mintModal', 'scale-100')
      })
  }

  const closeModal = () => {
    setGlobalState('mintModal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setFileUrl('')
    setImgBase64(null)
    setName('')
    setPrice('')
    setDescription('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${mintModal} z-50`}
    >
      <div
        className="bg-black shadow-xl
      shadow-pink-600 hover:from-pink-600
      hover:to-indigo-900 rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">DappStar</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          {imgBase64 ? (
            <div className="flex flex-row justify-center items-center rounded-xl mt-5">
              <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
                <img
                  alt="NFT"
                  className="h-full w-full object-cover cursor-pointer"
                  src={imgBase64}
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <RiShieldStarFill className="text-6xl text-pink-600" />
            </div>
          )}

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#19212c] file:text-gray-300
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 px-4 py-2"
              type="text"
              name="name"
              placeholder="Title"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 px-4 py-2"
              type="number"
              name="price"
              step={0.01}
              min={0.01}
              placeholder="Price (Eth)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-18 py-2 px-4"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white text-md bg-gray-800
              py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#ffffff]
              hover:border hover:border-gray-800
              focus:outline-none focus:ring mt-5"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default MintNFT
