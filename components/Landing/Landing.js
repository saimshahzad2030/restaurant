"use client"

import React, { useEffect, useState } from 'react';
import style from './Landing.module.css';

const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ['We are there for you to enjoy aesthetics', 'we provide you with the best of the best protocols', 'Our taste and dishes are second best to none'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className={style.container}>
      <img src='/Assets/Carrousel/landing.jpg' alt='' className={style.image} />
      <div className={style.textContainer}>
        {textArray.map((text, index) => (
          <div key={index} className={`${style.textItem} ${index === textIndex ? style.active : ''}`}>
            {text}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Landing;
