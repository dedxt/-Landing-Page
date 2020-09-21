import React,{useState} from 'react'
import NavBar from './NavBar';
import Image from './Image';
import FeatRequester from './FeatRequester';
import Footer from './Footer'

function Home() {
  return (
    <div>
      <NavBar/>
      <Image/>
      <FeatRequester/>
      <Footer/>
    </div>
  )
}

export default Home;
