import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="content">
        Leading Head  <br /> Of IT Sectors In India
      </div>
      <Link to='/Login'>
      <div class="container">
  <div class="button">
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
  
    <div class="button__wrapper">
     
      <span class="button__text">Register</span>
    
  
    </div>
   
    <div class="button__box">
      <div class="inner inner__top"></div>
      <div class="inner inner__front"></div>
      <div class="inner inner__bottom"></div>
      <div class="inner inner__back"></div>
      <div class="inner inner__left"></div>
      <div class="inner inner__right"></div>
    </div>
  </div>
</div>
</Link>
      </div>
      
      

  )
}

export default Home