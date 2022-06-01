import Head from 'next/head'
import Articles from '../components/List/Articles'

function Home() {
  return (
    <>
      <Head>
        <title>다른마켓</title>
        <meta name="description" content="당근과는 다르다! 당근과는!" />
      </Head>

      <main>
        <Articles />
      </main>
    </>
  )
}

export default Home
