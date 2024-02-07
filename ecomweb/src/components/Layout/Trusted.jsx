import React from 'react'
import img1 from '../images/logocom.jpg'

function Trusted() {
  return (
   <>
   <div className="trusted">
    <h1>Trusted Company</h1>
    <div className="trusted_logo">
      <div className="t_logo">
        <img src={img1}alt="" />
        <h3>hr pvt ltd</h3>
      </div>
      <div className="t_logo">
        <img src={img1} alt="" />
        <h3>zr limited</h3>
      </div>  <div className="t_logo">
        <img src={img1} alt="" />
        <h3>kf pvt ltd</h3>
      </div>  <div className="t_logo">
        <img src={img1} alt="" />
        <h3>hhs ltd</h3>
      </div>
    </div>
   </div>
   </>
  )
}

export default Trusted