import React from 'react'
import Header from '../components/Header'
import SpecialtiesMenu from '../components/SpecialtiesMenu'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialtiesMenu />
      <TopDoctors />
    </div>
  )
}

export default Home