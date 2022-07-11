import { AppProps } from 'next/app'
import { Provider } from 'jotai'
import { SWRConfig } from 'swr'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import { Router } from '../components/Router'
import { AppRouter } from '../server/routers/_app'
import { SSRContext } from '../utils/trpc'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
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

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: superjson,
    }
  },
  ssr: true,
  responseMeta(opts) {
    const ctx = opts.ctx as SSRContext

    if (ctx.status) {
      return {
        status: ctx.status,
      }
    }

    const error = opts.clientErrors[0]

    if (error) {
      return {
        status: error.data?.httpStatus ?? 500,
      }
    }

    return {}
  },
})(App)
