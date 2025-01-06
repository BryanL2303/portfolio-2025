import { useState } from 'react'
import './BlogPost.css'

function BlogPost({post}) {
  const dateObj = new Date(post.post_date);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObj);

  function navigatePage() {
    window.location.href = '/blogs/' + post.id
  }

  return (
    <div className='post-summary' onClick={navigatePage}>
        <label className='post-title'>{post.post_title}</label>
        <div className='row-section'>
            <label className='post-date'>{formattedDate}</label>
            <label className='post-label'>{post.post_label}</label>
        </div>
        <text className='post-description'>{post.post_description}</text>
    </div>
  )
}

export default BlogPost
