import React from 'react'
import {Navbar,Hero,Customer,Business,Control,Better,Say,Card,Company,Service,Footer,Copyright} from "./component/index";

const App = () => {
  return (
    <div className='w-full bg-black  '>
     <Navbar />
     <Hero/>
     <Customer/>
     <Business/>
     <Control/>
     <Better/>
     <Say/>
     <Card/>
     <Company/>
     <Service/>
     <Footer/>
     <Copyright/>
    </div>
  )
}

export default App
