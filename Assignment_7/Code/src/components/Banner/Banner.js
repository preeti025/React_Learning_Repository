import React, { useState } from 'react';
import styles from './Banner.module.css';
import bannerImg from '../../Assets/banner1.jpg';
import MealsSummary from './MealsSummary'

const Banner = () => {
  console.log(useState());
  return (
    <div className= {styles.banner}>
        <img src= {bannerImg} alt = 'This is a banner image'/>
          <MealsSummary />
    </div>
  )
}

export default Banner;