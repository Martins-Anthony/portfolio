import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../../containers/layouts/Header'
import Footer from '../../containers/layouts/Footer'
import { logo } from '../../../src/data/logo.js'
import Error from '../../pages/Error'
import Admin from '../../pages/Admin'
import Project from '../../pages/Project'

function AppRouter() {
  return (
    <Router>
      <div className="main-container">
        <Header title={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer title={logo} />
    </Router>
  )
}

export default AppRouter
