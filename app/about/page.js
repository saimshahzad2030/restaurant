import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import About from '@/components/About/About'
const AboutPage = () => {
  return (
    <>
    <Navbar  selectedLink={'about'}/>
   <About/>
    <Footer>copyright @ Mr Burger</Footer>
    </>
  )
}

export default AboutPage