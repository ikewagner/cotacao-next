import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Dashboard  from './../components/Main.js';

const Home: NextPage = () => {
  return (
    <div className='bg-red-400'>
      <Dashboard/>
    </div>
  )
}

export default Home
