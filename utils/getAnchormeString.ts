import anchorme from 'anchorme'

export function getAnchormeString(input: string) {
  return anchorme({
    input,
    options: {
      attributes: {
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    },
  })
}
