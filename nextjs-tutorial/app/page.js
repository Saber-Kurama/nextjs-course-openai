import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div className=' text-7xl'>HomePage</div>
      <Link href='/about'>About</Link>
    </div>
    
  )
}
