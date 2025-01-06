import './HomeFeaturedWork.css'
import thumbnail from '../../assets/thumbnail.png'

function HomeFeaturedWork({featuredWork}) {
  function navigatePage() {
    window.location.href = '/works/' + featuredWork.id
  }
  return (
    <div className='work-summary' onClick={navigatePage}>
        <img src={thumbnail} alt='thumbnail' />
        <div className='col-section'>
            <label className='work-title'>{featuredWork.work_title}</label>
            <div className='row-section'>
                <label className='work-year'>{featuredWork.work_year}</label>
                <label className='work-label'>{featuredWork.work_label}</label>
            </div>
            <text className='work-description'>{featuredWork.work_description}</text>
        </div>
    </div>
  )
}

export default HomeFeaturedWork