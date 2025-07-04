import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import { Features } from 'tailwindcss'
import FeatureBird from './component/FeatureBird'
import Service from './component/Service'
import CustomerSection from './component/CustomerSection'
import { GetInTouchSection } from './component/GetInTouchSection'
import Footer from './component/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css' 


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Aos.init({
      duration: 1000,  // animation duration (milliseconds)
      once: true,      // animation only once
    });
  }, []);



  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <FeatureBird></FeatureBird>
    <Service></Service>
    <CustomerSection></CustomerSection>
    <GetInTouchSection></GetInTouchSection>
    <Footer></Footer>
    
    
  

    </>
  )
}

export default App
