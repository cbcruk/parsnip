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
        <meta name="description" content={article.content} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: article.title,
              image: article.images.map((image) => image.file),
              description: article.content,
              offers: {
                '@type': 'Offer',
                url: `https://parsnip-three.vercel.app/articles/${article.id}`,
                priceCurrency: 'KRW',
                price: article.price,
                itemCondition: 'https://schema.org/UsedCondition',
                availability:
                  article.status === 'ongoing'
                    ? 'https://schema.org/InStock'
                    : 'https://schema.org/SoldOut',
              },
            }),
          }}
        />
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
