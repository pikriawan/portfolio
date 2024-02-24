'use client'

import dynamic from 'next/dynamic'

const Eruda = dynamic(() => import('./_raw-eruda'), {
  ssr: false
})

export default Eruda