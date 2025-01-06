import './Works.css'
import WorkFeature from './WorkFeature'

function Works() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const works = [
    {
      id: 1,
      work_title: "Administrative Site | Boys' Brigade",
      work_year: '2024',
      work_label: 'Fullstack development',
      work_description: 'Website for administrative work.'
    }
  ]

  function navigatePage(e) {
    window.location.href = e.target.name
  }

  return (
    <div className='work-list'>
      <h1>Works</h1>

      {works.map(work => {
        return <WorkFeature work={work} />
      })}
    </div>
  )
}

export default Works
