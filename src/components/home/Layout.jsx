import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import Content from './Content'

function Layout() {
  return (
    <div>
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default Layout