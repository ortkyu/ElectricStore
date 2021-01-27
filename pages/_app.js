import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';
import {Loader} from "../Components/Loader";


function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
  <Provider store={store}>
        <PersistGate loading={<div><Loader/></div>} persistor={persistor}>
          <Component {...pageProps} />
       </PersistGate>
  </Provider>
  )
}

export default MyApp
