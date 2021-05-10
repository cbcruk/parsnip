import { Provider } from 'jotai'
import { SWRConfig } from 'swr'
import Header from '../components/Header/Header'
import Suspense from '../components/Suspense'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Suspense fallback={null}>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
          }}
        >
          <Header />
          <Component {...pageProps} />
        </SWRConfig>
      </Suspense>
    </Provider>
  )
}

export default App
