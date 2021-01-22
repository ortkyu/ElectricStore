import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



let store

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['productsArray']
}

const persistedReducer = persistReducer(persistConfig, reducers)

function initStore(initialState) {
  return createStore(
    persistedReducer,
     initialState,
      applyMiddleware(thunkMiddleware)
      )
    }

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)


  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}



