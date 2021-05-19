import { Provider } from 'jotai'
import { SWRConfig } from 'swr'
import Header from '../components/Header/Header'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Provider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
        }}
      >
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}

export default App
