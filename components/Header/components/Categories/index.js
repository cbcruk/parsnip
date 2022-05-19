import { useAtom } from 'jotai'
import Link from 'next/link'
import useSWR from 'swr'
import { modalAtom } from '../Select/Category'

function Categories() {
  const [, handleModal] = useAtom(modalAtom)
  const { data } = useSWR('/api/categories')

  if (!data) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((category) => {
        return (
          <Link key={category.id} href={`/?category=${category.id}`}>
            <a
              className="flex gap-1 text-sm"
              onClick={() => handleModal(false)}
            >
              <img src={category.icon_image} alt="" width={20} height={20} />
              {category.name}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
