import React from 'react'
import Navigation from '../../Layout/Navigation.jsx'
import Header from '../../Layout/Header.jsx'
import Herosection from '../../Layout/Herosection.jsx'
import Services from '../../Layout/Services.jsx'
import Trusted from '../../Layout/Trusted.jsx'
import Footer from '../../Layout/Footer.jsx'
import Featureproduct from '../../Layout/Featureproduct.jsx'


function Home() {
   const mydata={
    name:'Welcome to Shophub'
   }

  return (
    <>
    <Header/>
    <Navigation/>
    <Herosection data={mydata}/>
    <Featureproduct/>
    <Services/>
    <Trusted/>
    <Footer/>
    </>
  )
}

export default Home