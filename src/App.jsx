import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Qualification from './components/Qualifications/Qualification'
import ContactPage from './components/Contacts/Contact'
// import Service from './components/Services/Service'

function App() {
  return (
    <>
     <Header></Header>
    <main className='main'>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      {/* <Service></Service> */}
      <Qualification></Qualification>
      <ContactPage></ContactPage>
    </main>

    </>
  )
}

export default App
