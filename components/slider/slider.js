
import { useState } from 'react'


//STYLES
import styles from './Slider.module.css'


const Slider = ({isChecked, onToggle, label}) =>{

    return (
      <div className={styles.container}>
        <button className={ isChecked ? styles.sliderRight : styles.slider} onClick={onToggle}></button>
      <label>{label}</label>
      
      </div>
    );
}

export default Slider;