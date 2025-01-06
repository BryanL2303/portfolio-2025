import './Header.css'

function Header() {
  function navigatePage(e) {
    window.location.href = e.target.name
  }

  return (
    <div className='header-div'>
      <button className='header-button' name='/' onClick={navigatePage}>Home</button>
      <button className='header-button' name='/works' onClick={navigatePage}>Works</button>
      <button className='header-button' name='/blogs' onClick={navigatePage}>Blogs</button>
    </div>
  )
}

export default Header
