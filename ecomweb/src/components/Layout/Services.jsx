import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";





function Services() {
  return (
    <>
    <div className="services">
      <div className="first_services">
      <FaCarSide />
      <h1>Fast and Free Delivery</h1>
      </div>
      <div className="second_services">
    <div className="sec_first">  <MdOutlineSecurity />
    <h1>Shipping everyWhere </h1>
    </div>
<div className="sec_sec">
<GiCash />
<h1>Cash back</h1>

</div>
      </div>
      <div className="third_services">
<MdOutlinePayment />
<h1>Secure payement system and service</h1>

      </div>
    </div>
    </>
  )
}

export default Services