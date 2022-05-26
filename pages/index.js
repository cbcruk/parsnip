import Head from 'next/head'
import Articles from '../components/List/Articles'
import { PropertiesProvider } from '../components/Provider'
import { getCategories } from '../lib/daangn'

function Home({ categories }) {
  return (
    <PropertiesProvider value={categories}>
      <Head>
        <title>다른마켓</title>
        <meta name="description" content="당근과는 다르다! 당근과는!" />
      </Head>

      <main>
        <Articles />
      </main>
    </PropertiesProvider>
  )
}

export async function getStaticProps() {
  const categories = await getCategories()

  return {
    props: {
      categories,
    },
  }
}

export default Home
