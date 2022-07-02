import { IconPhoto } from '../../../Icons'

type Props = {
  src: string
}

function Photo({ src }: Props) {
  return (
    <div className="flex items-center justify-center min-w-[80px] min-h-[80px]">
      {src ? (
        <img
          src={src}
          alt=""
          width="80"
          height="80"
          className="rounded-lg"
          loading="lazy"
        />
      ) : (
        <IconPhoto className="h-6 w-6" />
      )}
    </div>
  )
}

export default Photo
