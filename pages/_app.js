import { Provider } from 'jotai'
import { SWRConfig } from 'swr'
import { Router } from '../components/Router'
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
        <Router />
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}

export default App
