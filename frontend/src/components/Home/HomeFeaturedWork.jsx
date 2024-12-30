import { useState } from 'react'
import './HomeFeaturedWork.css'
import thumbnail from '../../assets/thumbnail.png'

function HomeFeaturedWork() {
  const [work, setWork] = useState({work_title: "Administrative Site | Boys' Brigade", work_year: '2024',
    work_label: 'Fullstack development', work_description: 'Website for administrative work.'
  })

  return (
    <div className='work-summary'>
        <img src={thumbnail} alt='thumbnail' />
        <div className='col-section'>
            <label className='work-title'>{work.work_title}</label>
            <div className='row-section'>
                <label className='work-year'>{work.work_year}</label>
                <label className='work-label'>{work.work_label}</label>
            </div>
            <text className='work-description'>{work.work_description}</text>
        </div>
    </div>
  )
}

export default HomeFeaturedWork