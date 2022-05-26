import clsx from 'clsx'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { modalAtom } from '../Select/Category/Category'

function Categories({ categories }) {
  const router = useRouter()
  const [, handleModal] = useAtom(modalAtom)

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = parseInt(router.query.category, 10) === category.id

        return (
          <Link key={category.id} href={`/?category=${category.id}`}>
            <a
              className={clsx(
                'flex gap-1 p-1 px-2 rounded-full border border-stone-500 text-sm',
                {
                  'bg-stone-700': isActive,
                  'text-stone-300': isActive,
                }
              )}
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
