import Hero from '@/components/home/Hero'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <main className='text-3xl'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default HomePage
