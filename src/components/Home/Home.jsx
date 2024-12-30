import './Home.css'
import profilePhoto from '../../assets/profile.jpeg'
import HomePost from './HomePost'
import HomeFeaturedWork from './HomeFeaturedWork'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home({setPage}) {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // apiUrl + '/api/posts' 
    axios.get('https://07dzkq7tyg.execute-api.ap-southeast-1.amazonaws.com/default/getPosts')
    .then((resp) => {
      console.log(resp.data)
      // Express
      //setPosts(resp.data[0])
      // Flask
      setPosts(resp.data)
    })
  }, [])

  function navigatePage(e) {
    setPage(e.target.name)
    console.log(e.target.name)
  }

  return (
    <>
      <div className='introduction-div'>
        <div className='introduction-container'>
          <h1 className='greeting-h1'>Hi, I am Bryan, Software Engineer</h1>
          <p className='greeting-p'>Graduating with a Bachelor in Computing, Computer Science in May 2025.</p>
          <p className='greeting-p'>Looking for work as a software engineer!</p>
          <br/>
          <button className='resume-button'>Download Resume</button>
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
        <button className='redirect-button' name='Blog' onClick={navigatePage}>View all</button>
        <div className='row-section'>
          {posts.map((post) => {
            return(<HomePost key={post.id} post={post} />)
          })}
        </div>
      </div>

      <div className='work-feature-div'>
        <label className='title'>Featured works</label>
        <HomeFeaturedWork />
        <HomeFeaturedWork />
        <HomeFeaturedWork />
      </div>
    </>
  )
}

export default Home
