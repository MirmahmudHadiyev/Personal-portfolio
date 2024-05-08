import React, {useEffect} from 'react'
import IMAGES from '../assets/images'
import { useSelector} from 'react-redux';
const blog = () => {
  const { mode } = useSelector((state) => state.darkMode)

  useEffect(()=>{
    const blog_img = document.querySelectorAll(".blog_img")
    blog_img.forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })

  })
  return (
    <>
      <div id='blog' className='blog flex' style={{background:mode ? '#0b0b13' : '#f1f2f6'}}>
      <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Chesk Out My Latest Blog posts</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Blog</span></h1>
       <div className='animated_bar'></div>
      </div>

      <div className='blog_center flex'>
       <div className='blog_img'>
        <img src={IMAGES.b1}/>
        <div className='blog_text flex' style={{background:mode ? '#141421' : '#f1f2f6'}}>
         <a href='#' className='flex'>
          <h4 style={{color:mode ? '#fff' : '#0f172a'}}>The Importance Of Web design</h4>
         </a>
         <p style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum commodi aperiam </p>
        </div>
       </div>

       <div className='blog_img'>
       <img src={IMAGES.b2}/>
        <div className='blog_text flex' style={{background:mode ? '#141421' : '#f1f2f6'}}>
         <a href='#' className='flex'>
          <h4 style={{color:mode ? '#fff' : '#0f172a'}}>The Importance Of Web design</h4>
         </a>
         <p style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum commodi aperiam </p>
        </div>
       </div>

       <div className='blog_img'>
       <img src={IMAGES.b3}/>
        <div className='blog_text flex' style={{background:mode ? '#141421' : '#f1f2f6'}}>
         <a href='#' className='flex'>
          <h4 style={{color:mode ? '#fff' : '#0f172a'}}>The Importance Of Web design</h4>
         </a>
         <p style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum commodi aperiam </p>
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default blog
