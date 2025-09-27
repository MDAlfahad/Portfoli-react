import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About_me from './components/About_me'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Places from './components/Places'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <About_me/>
      <Places/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App