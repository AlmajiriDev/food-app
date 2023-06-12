import React from 'react'
import CustomImage from './CustomImage'

function HeroSection() {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ]
  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>Who We Are</h1>
            <p className='info'>IyaUSoup, a renowned restaurant, specializes in serving a wide range of delicious Nigerian and African meals, showcasing the rich flavors and culinary traditions of the region. With their extensive menu and exceptional dining experience, we are sure to satisfy your cravings for authentic African cuisine.</p>
            <button className='btn'>Explore Menu</button>
        </div>
        <div className='col gallery'>
          {
            images.map((src, index)=>(
              <CustomImage key={index} imgSrc={src} pt={"90%"}/>
            ))
          }
            </div>
        </div>
  )
}

export default HeroSection