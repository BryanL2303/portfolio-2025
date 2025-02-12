import './AdministrationPageFeature.css'
import userManagementImg from './user-management-page.png'
import attendanceTakingPage from './attendance-taking-page.png'
import attendanceExcel from './attendance-excel.png'
import awardsManagementPage from './awards-management-page.png'
import generateResultsPage from './generate-results-page.png'
import generatedResultsPage from './generated-results-page.png'

function AdministrationPageFeature() {
  return (
    <div className='administration-page-feature'>
      <div className='title-div'>
          <h1>Administrative Site | Boys' Brigade</h1>
          <label>12 February 2025   |   Fullstack development</label>
      </div>

      <div className='summary-div'>
        <div className='text'>
            <h2>Project Summary</h2>
            <p>This project was created for the Boys' Brigade 21st Singapore Company.
              As a volunteer that has been serving for 7 years at the time, in August of 2023 I started this project.
              This project was intended to be a learning experience for myself who has just started learning web development frameworks at the time.
              I will discuss some of the learning experiences that I had through this project from development to hosting and using the site.
            </p>
        </div>
      </div>

      <div className='techstack-div'>
        <div className='text'>
            <h2>Techstack</h2>
            <p>This project was created with ReactJS frontend, Ruby on Rails backend with a PGSQL database.
              It is hosted on Heroku.
            </p>
        </div>
      </div>

      <div className='features-div'>
        <div className='text'>
          <h2>Features</h2>
          <p>1. Managing accounts of all active/recently pass members</p>
          <p>2. Attendance taking for CCA Sessions</p>
          <p>3. Compiling and tracking Boys progress for BB awards system</p>
          <p>4. Compiling pdf documents for common paperwork to minimise time spent</p>
        </div>
      </div>

      <div className='screenshots-div'>
        <h2>Screenshots</h2>
        <h3>Managing User Accounts</h3>
        <img src={userManagementImg}/>
        <h3>Attendance Taking for CCA Sessions</h3>
        <img src={attendanceTakingPage}/>
        <img src={attendanceExcel}/>
        <h3>Compiling and Tracking Boys Awards Progress</h3>
        <img src={awardsManagementPage}/>
        <h3>Compiling PDF for Paperwork</h3>
        <img src={generateResultsPage}/>
        <img src={generatedResultsPage}/>
      </div>

      <div className='challenges-div'>
        <div className='text'>
          <h2>Challenges Faced</h2>
          <h3>"Shifting Left"</h3>
          <p>At the time I started working on this project I have not taken many software engineering modules.
            After having done so, I know much more about software engineering principles and methodologies and would probably have taken a much different approach.
            One of the lessons that I have learnt the hard way and subsequently learned in class is the concept of "shifting left".
            The idea of spending more time on the beginning stages of the project such as requirements engineering, considering the system architecure and features.
            Many of the features which I created at the beginning of the project such as an entire quiz system with a question bank is no longer on the site as it was not used.
            In fact, half of the time which I have spent on this project was on the features which I since removed from the site.
            Compared to the earlier days when I would just straight into coding and trying to tackle any interesting issues I am definitely more calm now.
            I have definitely become much stricter when it comes to defining features and how they would be used by the users and thinking about features from the users perspective.
          </p>
          <h3>AGILE Methodology</h3>
          <p>In reality considering how busy I am with school work I have not actually spent that much time on this project, despite it being over a year since I started.
            There are many flaws to this site, as I have not had the time to properly test the site.
            Even after deploying the site and having it be used there have been bugs appearing which I have had to fix along the way.
            It was a good experience juggling between having a functonal and stable site while also trying to push new features.
            The concept of having a minimally functional product and slowly building on it was key here as there was only so much that I could do.
          </p>
          <h3>Design</h3>
          <p>I am not exactly great at designing, which would be apparent from the simplistic layout of the site.
            There are plans in progress with new contributors to overhaul the frontend and design of the site, which will probably be featured again in a future post.
            This will involve using Figma to design the pages before updating the designs of the pages. More about my initial experiences with Figma in a recent blog post.
          </p>
        </div>
      </div>

      <div className='contributions-div'>
        <h2>Code and Contributions</h2>
        <a href="https://github.com/BryanL2303/BB-21st-Portal">https://github.com/BryanL2303/BB-21st-Portal</a>
        <p>As of the time of this feature I am the sole contributor to the whole project.
          Refer to the README of the project or future features for more recent updates.
        </p>
      </div>
    </div>
  )
}

export default AdministrationPageFeature
