import React from 'react'
//import myresume from '/2023-updated-resume.pdf'

import './styles.css'

function Resume() {
  return (
    <div className="App">
      <div className="all-page-container">
      <object data="2023-updated-resume.pdf" type="application/pdf" width="75%" height="700px">
      <p>Alternative text - include a link <a href={"./2023-updated-resume.pdf"}>to the PDF!</a></p>
      </object>
      </div>
    </div>
  )
}

export default Resume