import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../../containers/layouts/Header'
import Footer from '../../containers/layouts/Footer'
import { logo } from '../../../src/data/logo.js'

function AppRouter() {
  return (
    <Router>
      <div className="main-container">
        <Header title={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer title={logo} />
    </Router>
  )
}

export default AppRouter
