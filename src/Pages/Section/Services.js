import React from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-24 bg-gray-200 justify-items-center text-violet-900 text-lg">
      <div className=' justify-items-center'>
      <TbTruckDelivery style={{width:50,height:50}}/>
      <h3>Super fast and free delivery</h3>
      </div>
      <div className=' justify-items-center'>
      <MdSecurity style={{width:50,height:50}} />
      <h3>Non-Contact Shipping</h3>
      </div>
      <div className=' justify-items-center'>
      <GiReceiveMoney style={{width:50,height:50}} />
      <h3>Money-back Guaranteed</h3>
      </div>
      <div className=' justify-items-center'>
      <RiSecurePaymentLine style={{width:50,height:50}} />
      <h3>Super Secure Payment</h3>
      </div>
    </div>
  )
}

export default Services