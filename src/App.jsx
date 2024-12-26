import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import './App.css'

function App() {
  const [page, setPage] = useState('Home')

  return (
    <>
      <Header setPage={setPage}/>
      <div className='page-container'>
        {page == 'Home' && <Home setPage={setPage} />}
      </div>
      <Footer />
    </>
  )
}

export default App
