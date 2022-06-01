import Head from 'next/head'
import Article from '../../components/Article/Article'
import { TopAppBars } from '../../components/TopAppBars/TopAppBars'
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
        <meta
          property="og:url"
          content={`https://parsnip-three.vercel.app/articles/${article.id}`}
        />
        <meta property="og:type" content="og:product" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content} />
        <meta property="og:image" content={article.images[0]?.file} />
        <meta property="product:plural_title" content={article.title} />
        <meta property="product:price:amount" content={article.price} />
        <meta property="product:price:currency" content="KRW" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="parsnip-three.vercel.app" />
        <meta
          property="twitter:url"
          content={`https://parsnip-three.vercel.app/articles/${article.id}`}
        />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content} />
        <meta name="twitter:image" content={article.images[0]?.file} />
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

      <TopAppBars />
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
