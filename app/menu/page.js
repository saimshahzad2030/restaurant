import Footer from '@/components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/navbar/Navbar'
import React from 'react'

const MenuPage = () => {
  return (
    <>
    <Navbar  selectedLink={'menu'}/>
    <Menu/>
    <Footer>copyright @ Mr Burger</Footer>
    </>
  )
}

export default MenuPage