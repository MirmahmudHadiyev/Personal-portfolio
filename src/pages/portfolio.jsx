import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import Image from '../assets/images/images';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';

import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';

const portfolio = () => {
  const { mode } = useSelector((state) => state.darkMode)
const [images, setImages] = useState(Image)

function imgFilter(category){
  const imgupdate = Image.filter((item) =>{
  return item.category == category
})
setImages(imgupdate)
}

function All(category){
  const imgupdate = Image.filter((item) =>{
  return item.all == category
})
setImages(imgupdate)
}

 
  return (
    <>
      <div id='portfolio' className='portfolio flex' style={{background:mode ? '#10101a' : '#fff'}}>
      <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Showcasing Some Of My Best Work</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>portfolio</span></h1>
       <div className='animated_bar'></div>
      </div>

      <div className='portfolio_button flex'>
       <button onClick={() => All('all')}>All</button>
       <button style={{color:mode ? '#fff' : '#0f172a'}} onClick={() => imgFilter('webdev')}>Web Development</button>
       <button style={{color:mode ? '#fff' : '#0f172a'}} onClick={() => imgFilter('webdes')}>Web Design</button>
       <button style={{color:mode ? '#fff' : '#0f172a'}} onClick={() => imgFilter('grp')}>Graphics</button>
       <button style={{color:mode ? '#fff' : '#0f172a'}} onClick={() => imgFilter('uxui')}>UI-UX Design</button>
      </div>

      <div className='portfolio_img flex'>

        {
          images.map((item, index) =>{
            return (
              <LightGallery speed={500} plugins={[lgThumbnail,lgZoom,lgAutoplay]} licenseKey='item'>
              <a href={item.img} className='flex' >
              <img src={item.img} />
              <div className='info flex'>
              <ion-icon name="attach-outline"></ion-icon>
                <h4 className='flex'>{item.head}</h4>
                <p>{item.text}</p>
              </div>
             </a>
             </LightGallery>
            )
          })
        }


      </div>
      </div>
    </>
  )
}

export default portfolio
