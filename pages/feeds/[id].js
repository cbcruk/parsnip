import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Feed from '../../components/Feed/'

function Detail() {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(id ? `/api/feeds/${id}` : null)

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

      <Feed article={article} />
    </>
  )
}

export default Detail
