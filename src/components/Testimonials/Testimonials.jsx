import React,{useState} from 'react'
import "./testimonials.css"
import { testimonialsData } from '../../data/testimonialsData'
import leftarrow from "../../assets/leftArrow.png"
import rightarrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"
const Testimonials = () => {
  const transition ={type:"spring",duration:3};
  const [selected,setSelected]=useState(0)
  const tlength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="testimonials--left">
        <span>Testimonials</span>
        <span className='stroke--text'>What they</span>
        <span>sat about use</span>
        <div>
          <motion.span 
          key={selected}
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:300}}
          exit={{opacity:0,x:0}}
          transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
          <br/>
          <span style={{color:'orange'}}>
            {testimonialsData[selected].name}
          </span>
           - 
          <span>
            {testimonialsData[selected].status}
          </span>
         </div>
      </div>
      <div className="testimonials--right">
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}></motion.div>
        <motion.div
        initial={{opacity:0,x:500}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}></motion.div>
        <motion.img
        key={selected}
        src={testimonialsData[selected].image} alt=""  
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}/>
        <div className='testimonials--arrow'>
          <img src={leftarrow} alt="" onClick={()=>{
            selected===0?setSelected(tlength-1):
            setSelected((prev)=>prev-1)
          }}/>
          <img src={rightarrow} alt="" onClick={()=>{
            selected===(tlength-1)?setSelected(0):
            setSelected((prev)=>prev+1)
          }}/>
        </div>
        
        <div></div>
        
      </div>
    </div>
  )
}

export default Testimonials