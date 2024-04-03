import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../../containers/layouts/Header'
import Footer from '../../containers/layouts/Footer'
import Error from '../../pages/Error'
import Admin from '../../pages/Admin'
import Project from '../../pages/Project'

function AppRouter() {
  return (
    <HashRouter>
      <main className="main-container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default AppRouter
