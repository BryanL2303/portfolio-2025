import './Blogs.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BlogPost from './BlogPost'

function Blogs() {
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
    <div className='blog-list'>
      <h1>Blogs</h1>

      {posts.map((post) => {
        return <BlogPost post={post}/>
      })}
    </div>
  )
}

export default Blogs
