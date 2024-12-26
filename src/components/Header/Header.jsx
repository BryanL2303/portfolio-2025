import './Header.css'

function Header({setPage}) {
  function navigatePage(e) {
    setPage(e.target.innerHTML)
  }

  return (
    <div className='header-div'>
      <button className='header-button' onClick={navigatePage}>Home</button>
      <button className='header-button' onClick={navigatePage}>Works</button>
      <button className='header-button' onClick={navigatePage}>Blog</button>
      <button className='header-button' onClick={navigatePage}>Contact</button>
    </div>
  )
}

export default Header
