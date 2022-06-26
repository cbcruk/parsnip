import Head from 'next/head'
import Articles from '../components/List/Articles'
import useArticles from '../components/List/Articles/useArticles'

function Home() {
  const response = useArticles()

  return (
    <>
      <Head>
        <title>다른마켓</title>
        <meta name="description" content="당근과는 다르다! 당근과는!" />
      </Head>

      <main>
        <Articles {...response} />
      </main>
    </>
  )
}

export default Home
