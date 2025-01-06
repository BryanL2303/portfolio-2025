import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Works from './components/Works/Works'
import AdministrationPageFeature from './components/Works/features/AdministrationPageFeature'
import Blogs from './components/Blogs/Blogs'
import AdministrationPageBlog from './components/Blogs/posts/AdministrationPageBlog'
import FigmaLearningBlog from './components/Blogs/posts/FigmaLearningBlog'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='page-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/1" element={<AdministrationPageFeature />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/1" element={<AdministrationPageBlog />} />
          <Route path="/blogs/2" element={<FigmaLearningBlog />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
