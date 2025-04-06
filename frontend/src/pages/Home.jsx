import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Testimonial15 from '../components/Testemonial'
import PopupWidget from './PopupWidget'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Banner />
      <TopDoctors />
      <PopupWidget/>
       <Testimonial15 />
       
    </div>
  )
}

export default Home