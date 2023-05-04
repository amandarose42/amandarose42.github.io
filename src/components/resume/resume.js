import React from 'react'
import SinglePageViewer from './load-resume'
//import myresume from '/2023-updated-resume.pdf'

import './styles.css'

function Resume() {
  return (
    <div className="App">

      <h4>All Pages</h4>
      <div className="all-page-container">
        <SinglePageViewer pdf={'/2023-updated-resume.pdf'} />
      </div>

    </div>
  )
}

export default Resume