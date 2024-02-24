'use client'

import eruda from 'eruda'
import { useEffect } from 'react'

const erudaOption = {
  defaults: {
    displaySize: 60,
    theme: 'Night Owl'
  }
}

export default function RawEruda() {
  useEffect(() => {
    eruda.init(erudaOption)

    return () => {
      eruda.destroy()
    }
  }, [])
}