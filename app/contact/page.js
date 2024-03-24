import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import Contact from '@/components/Contact/Contact'

const ContactPage = () => {
  return (
    <>
    <Navbar  selectedLink={'contact'}/>
    <Contact/>
   
    <Footer>copyright @ Mr Burger</Footer>
    </>
  )
}

export default ContactPage