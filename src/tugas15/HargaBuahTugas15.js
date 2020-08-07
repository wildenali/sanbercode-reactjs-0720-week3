import React from 'react'
import { HargaBuahProvider } from './HargaBuahContext'
import HargaBuahList from './HargaBuahList'
import HargaBuahForm from './HargaBuahForm'

const HargaBuahTugas15 = () => {
  
  return (
    <>
      <HargaBuahProvider>
        <HargaBuahList />
        <HargaBuahForm />
      </HargaBuahProvider>
    </>
  )
}

export default HargaBuahTugas15