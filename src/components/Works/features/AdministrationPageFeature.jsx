import './AdministrationPageFeature.css'


function AdministrationPageFeature() {
  return (
    <div className='administration-page-feature'>
      <div className='title-div'>
          <h1>Administrative Site | Boys' Brigade</h1>
          <label>25 December 2024   |   Fullstack development</label>
      </div>

      <div className='paragraph-1-div'>
        <div className='text'>
            <h2>Techstack</h2>
            <p>This project was created with ReactJS frontend, Ruby on Rails backend with a PGSQL database.
              It is hosted on Heroku.
            </p>
        </div>
      </div>

      <div className='paragraph-2-div'>
        <div className='text'>
          <h2>Features</h2>
          <p>1. Attendance taking for CCA Sessions</p>
          <p>2. Compiling and tracking Boys progress for BB awards system</p>
          <p>3. Compiling pdf documents for common paperwork to minimise time spent</p>
        </div>
      </div>
    </div>
  )
}

export default AdministrationPageFeature
