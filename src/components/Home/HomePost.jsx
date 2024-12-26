import { useState } from 'react'
import './HomePost.css'

function HomePost() {
  const [post, setPost] = useState({post_title: "Administrative website for Boys' Brigade", post_date: '25 Dec 2024',
    post_label: 'Fullstack development', post_description: 'Website for administrative work.'
  })

  return (
    <div className='post-summary'>
        <label className='post-title'>{post.post_title}</label>
        <div className='row-section'>
            <label className='post-date'>{post.post_date}</label>
            <label className='post-label'>{post.post_label}</label>
        </div>
        <text className='post-description'>{post.post_description}</text>
    </div>
  )
}

export default HomePost
