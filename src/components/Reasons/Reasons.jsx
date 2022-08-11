import React from 'react'
import './reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="reasons--left">
        <div><img src={image1} alt=""className='image1'/></div>
        <div className='gallery--left--right'>
          <div className='gallery--top--right'><img src={image2} alt="" className='image2'/></div>
          <div className='gallery--bottom--right'>
            <div className='gallery--bottom--right--cell'><img src={image3} alt="" className='image3'/></div>
            <div className='gallery--bottom--right--cell'><img src={image4} alt="" className='image4'/></div>
          </div>
        </div>
        
      </div>
      <div className="reasons--right">
        <span>some raasons</span>
        <div>
          <span className='stroke--text'>why </span>
          <span>choose us?</span>
        </div>
        <div className='right--details'>
          <div>
            <img src={tick} alt="" />
            <span>OVE 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{color:'var(--gray)',fontWeight: 'normal'}}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons