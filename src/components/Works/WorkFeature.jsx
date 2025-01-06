import './WorkFeature.css'
import thumbnail from '../../assets/thumbnail.png'

function WorkFeature({work}) {
  function navigatePage() {
    window.location.href = '/works/' + work.id
  }
  return (
    <div className='work-summary' onClick={navigatePage}>
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

export default WorkFeature
