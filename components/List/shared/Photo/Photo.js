import { IconPhoto } from '../../../Icons'

function Photo({ src }) {
  return (
    <div className="flex items-center justify-center w-16">
      {src ? (
        <img src={src} alt="" width="64" height="64" className="rounded-md" />
      ) : (
        <IconPhoto className="h-6 w-6" />
      )}
    </div>
  )
}

export default Photo
