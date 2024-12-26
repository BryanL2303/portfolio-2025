import './Footer.css'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.webp'

function Footer({setPage}) {
  function navigatePage(e) {
    setPage(e.target.innerHTML)
  }

  return (
    <div className='footer-div'>
      <a><img src={githubIcon} alt='Github' /></a>
      <a><img src={linkedinIcon} alt='Linked In' /></a>
    </div>
  )
}

export default Footer
