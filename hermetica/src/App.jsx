import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './routes/About'
import Activities from './routes/Activities'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './routes/Home'
import Members from './routes/Members'
import NoPage from './routes/NoPage'

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/members' element={<Members />} />
          <Route path='/activites' element={<Activities />} />
          <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
