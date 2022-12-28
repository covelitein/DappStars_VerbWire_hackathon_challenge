import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  mintModal: 'scale-0',
  AddToursModalOpacity: 'opacity-0',
  AddToursVisibility: 'invisible',
  AddTourModalTranslate: '-translate-y-5',

  connectedAccount: '',
  nfts: [],
})

export { getGlobalState, useGlobalState, setGlobalState }
