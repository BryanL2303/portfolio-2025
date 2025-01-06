import './FigmaLearningBlog.css'
import templatePhoto from '../../../assets/figma-portfolio-template.png'
import homeDesign from '../../../assets/figma-portfolio-home-design.png'

function FigmaLearningBlog() {
  return (
    <div className='figma-learning-blog'>
      <div className='title-div'>
          <h1>Creating website designs for UI/UX as part of E2E Process</h1>
          <label>25 December 2024   |   Figma, Design</label>
      </div>

      <div className='paragraph-1-div'>
        <div className='text'>
            <h2>Learning Figma</h2>
            <p>As part of my preparations for DBS Hackathon under the tech track, I did more research on wireframing.
              This led me to Figma where I started looking through templates and introduction guides.
              I started working on a design for my portfolio site by editing a template.
            </p>
        </div>
      </div>

      <div className='paragraph-2-div'>
        <div className='text'>
          <p>I used an open source template as a base to edit and modify to suit my needs</p>
          <a href='https://www.figma.com/community/file/882879599442878081'>https://www.figma.com/community/file/882879599442878081</a>
        </div>
        <div>
          <img src={templatePhoto} />
        </div>
      </div>

      <div className='paragraph-3-div'>
        <div className='text'>
          <p>After some adjustments and changes to color themes and changing some segments I ended up with a design that I could use
            In the process I learned about properly grouping components.
            The experience I have as a developer helped alot in the learning process of properly naming and grouping components for hand off to developers.
          </p>
        </div>
        <div>
          <img src={homeDesign} />
        </div>
      </div>
    </div>
  )
}

export default FigmaLearningBlog
