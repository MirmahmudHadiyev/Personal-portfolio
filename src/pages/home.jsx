import React from 'react'
import { Link } from 'react-scroll'
import {useTypewriter} from 'react-simple-typewriter'
import { useSelector, useDispatch } from 'react-redux'
import {toggleDarkMode} from '../config/dark'
const home = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop:{},
    typeSpeed:220,
    deleteSpeed:80,
    delaySpeed:1500,
  });
 
  const { mode } = useSelector((state) => state.darkMode)
  const dishpach = useDispatch()
  
 
  return (
    <>
     
      <div id='hero' className='home' style={{background:mode ? '#10101a' : '#fff'}}>
        <div className='center'>
         <div className='center_left'>
           <div className='center_left_img'></div>
         </div>
         <div className='center_right'>
           <div className='center_right_text'>
             <div className='center_right_div1'>
              <span className='span1' style={{color:mode ? '#a9afc3' : '#3c3e41'}}>INTRODUCTION</span>
              <h1 style={{color:mode ? '#fff' : '#0f172a'}}>Hi, I'm <span className='span2'>Mirmahmud Hadiyev A</span>  <span className='span2' style={{color:mode ? '#fff' : '#0f172a'}}>{text}</span> </h1>
              <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, magni? Rerum dicta nesciunt, harum vel inventore velit consequuntur vitae consequatur tempore, reiciendis qui placeat tempora natus sint alias, nam aperiam!</span>
             </div>
             <div className='center_right_div2'>
              <Link to='about' spy={true} smooth={true} offset={-100} duration={1000}>About Me</Link>
              <div>
              <ion-icon name="logo-facebook" style={{color:mode ? '#fff' : '#0f172a'}}></ion-icon>
              <ion-icon name="logo-instagram" style={{color:mode ? '#fff' : '#0f172a'}}></ion-icon>
              <ion-icon name="logo-linkedin" style={{color:mode ? '#fff' : '#0f172a'}}></ion-icon>
              <ion-icon name="logo-xing" style={{color:mode ? '#fff' : '#0f172a'}}></ion-icon>
              </div>
             </div>
           </div>
         </div>
        </div>

        <button className='moon flex' onClick={() => dishpach(toggleDarkMode())}>
        <ion-icon name="moon-outline"></ion-icon>
    </button>
      </div>
      
     
      
    </>
  )
}

export default home
