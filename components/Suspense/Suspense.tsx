import React from 'react'
import { isBrowser } from '../../utils'

const Suspense = isBrowser() ? React.Suspense : () => <></>

export default Suspense
