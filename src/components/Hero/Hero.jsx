import React from 'react'
import './Hero.css'
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
const Hero = () => {
  const transition ={type:'spring',duration:3}
  const mobile =window.innerWidth<=768 ? true:false;
  return (
    <div className='hero'>
      <div className="blur hero--blure"></div>
      {/*left side */}
      <div className="hero--left">
        <Header/>

     {/* the best add*/}
        <div className="the--best--fitness">
          <motion.div
          initial={{left:mobile? "178px":"283px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >

          </motion.div>
          <span>The best fitnex club in the town</span>
        </div>
      {/* Hero Headline*/ }
        <div className="hero--text">
          <div>
            <span className='stroke--text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            
          </div>

        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+180</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978 </span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
           </div>
        </div>
        {/* hero button */}
        <div className="hero--button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>








      {/*right side */}
      <div className="hero--right">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{right:'-1rem'}}
          whileInView={{right:'10rem'}}
          transition={{...transition,type:'tween'}}
          className='heart--rate'>
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero image */}
        <img src={hero_image} alt="" className='hero--image'/>
        <motion.img 
         src={hero_image_back} alt="" className='hero--image--back' 
         initial={{left:'11rem'}}
         whileInView={{left:'-13rem'}}
         transition={{...transition,type:'tween'}}/>
        {/*calories */}
        <motion.div className="calories"
         initial={{right:'60rem'}}
         whileInView={{right:'50rem'}}
         transition={{...transition,type:'tween'}}>
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Hero

