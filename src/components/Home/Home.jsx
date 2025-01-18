import './Home.css'
import profilePhoto from '../../assets/profile.jpeg'
import HomePost from './HomePost'
import HomeFeaturedWork from './HomeFeaturedWork'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [posts, setPosts] = useState([
    {
      "id": 1,
      "post_date": "Wed, 25 Dec 2024 00:00:00 GMT",
      "post_description": "Website for administrative work.",
      "post_label": "Fullstack development",
      "post_title": "Administrative website for Boys' Brigade"
    },
    {
      "id": 2,
      "post_date": "Wed, 25 Dec 2024 00:00:00 GMT",
      "post_description": "Creating website designs for UI/UX as part of E2E Process.",
      "post_label": "Figma, Design",
      "post_title": "Creating frontend designs with Figma"
    }
  ])
  const featuredWorks = [
    {
      id: 1,
      work_title: "Administrative Site | Boys' Brigade",
      work_year: '2024',
      work_label: 'Fullstack development',
      work_description: 'Website for administrative work.'
    }
  ]

  // useEffect(() => {
  //   // apiUrl + '/api/posts' 
  //   axios.get(apiUrl + '/api/posts' )
  //   .then((resp) => {
  //     // Express
  //     //setPosts(resp.data[0])
  //     // Flask
  //     setPosts(resp.data)
  //   })
  // }, [])

  function navigatePage(e) {
    window.location.href = e.target.name
  }

  return (
    <>
      <div className='introduction-div'>
        <div className='introduction-container'>
          <h1 className='greeting-h1'>Hi, I am Bryan, Software Engineer</h1>
          <p className='greeting-p'>Graduating with a Bachelor in Computing, Computer Science in May 2025.</p>
          <p className='greeting-p'>Looking for work as a software engineer!</p>
          <br/>
          <a href="/resume.pdf" download="resume.pdf">
            <button className='resume-button'>Download Resume</button>
          </a>
        </div>
        <div className='profile-container'>
            <img className='profile-img' src={profilePhoto} alt='Profile Picture' />
            <div className='profile-shadow'></div>
        </div>
      </div>

      <div className='skillset-div'>
        <div className='skills-div'>
            <label>Skills</label>
            <div className='skills-box'>
                <p>UI/UX design, Wireframing with Figma</p>
                <p>AGILE and Scrum</p>
                <p>E2E development, fullstack development</p>
            </div>
        </div>
        <div className='techstack-div'>
            <label>Tech Stack</label>
            <div className='techstack-box'>
                <p>Python, Java</p>
                <p>HTML, CSS, Javascript</p>
                <p>ReactJS, Ruby on Rails, ExpressJS, Flask</p>
                <p>PGSQL, MySQL</p>
                <p>Heroku, AWS</p>
            </div>
        </div>
      </div>

      <div className='blog-feature-div'>
        <label className='title'>Recent posts</label>
        <button className='redirect-button' name='/blogs' onClick={navigatePage}>View all</button>
        <div className='row-section'>
          {posts.map((post) => {
            return(<HomePost key={post.id} post={post} />)
          })}
        </div>
      </div>

      <div className='work-feature-div'>
        <label className='title'>Featured works</label>
        {featuredWorks.map((featuredWork) => {
          return <HomeFeaturedWork featuredWork={featuredWork}/>
        })}
      </div>
    </>
  )
}

export default Home
