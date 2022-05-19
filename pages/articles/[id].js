import Head from 'next/head'
import Article from '../../components/Article/Article'
import { getArticle } from '../../lib/daangn'

function ArticleId({ data }) {
  if (!data) {
    return null
  }

  const { article } = data

  return (
    <>
      <Head>
        <title>다른마켓 - {article.title}</title>
        <meta name="description" content="당근과는 다르다! 당근과는!" />
      </Head>

      <Article article={article} />
    </>
  )
}

export async function getServerSideProps({ res, params }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const id = params.id
  const data = await getArticle(id)

  return {
    props: {
      data,
    },
  }
}

export default ArticleId
