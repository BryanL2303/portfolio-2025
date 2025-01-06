import './Footer.css'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.webp'

function Footer({setPage}) {
  function navigatePage(e) {
    setPage(e.target.innerHTML)
  }

  return (
    <div className='footer-div'>
      <a href='https://github.com/BryanL2303'><img src={githubIcon} alt='Github' /></a>
      <a href='https://www.linkedin.com/in/bryan-lee-zhe-yin-053395145'><img src={linkedinIcon} alt='Linked In' /></a>
    </div>
  )
}

export default Footer
