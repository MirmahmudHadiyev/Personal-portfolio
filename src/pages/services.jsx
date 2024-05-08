import React, { useEffect } from 'react'
import IMAGES from '../assets/images'
import { useSelector} from 'react-redux';
const services = () => {
  const { mode } = useSelector((state) => state.darkMode)

  useEffect(() =>{
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 6000;
    valueDisplays.forEach((valueDisplay) =>{
        
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        
        
        let duration = Math.floor(interval/endValue);
        
        let counter = setInterval(function (){
            startValue +=1;
            valueDisplay.textContent = startValue;
            
            if(startValue == endValue){
                clearInterval(counter);
               
            }
           
        }, duration);
        
    })
  })

  useEffect(()=>{
    const all_devoloper = document.querySelectorAll(".all_devoloper")
    const slider_all = document.querySelectorAll(".slider_all")
    const statistic_one  = document.querySelectorAll(".statistic_one ")
    all_devoloper.forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })

    slider_all.forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })
    
    statistic_one  .forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })

    all_devoloper.forEach(item =>{
      if(!mode){
        item.addEventListener("mouseover", ()=>{
          item.style.background = '#ff4904';
         })

         item.addEventListener("mouseout", ()=>{
          item.style.background = '#f1f2f6';
         })
      }
      else if(mode){
        item.addEventListener("mouseover", ()=>{
          item.style.background = '#ff4904';
         })

         item.addEventListener("mouseout", ()=>{
          item.style.background = '#141421';
         })
      }
     

     
    })

  })

  return (
    <>
      <section id='services' className='services flex' style={{background:mode ? '#0b0b13' : '#f1f2f6'}}>
       <div className='seevices_center flex'>
       <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Services I Offer To My Clients</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Services</span></h1>
       <div className='animated_bar'></div>
      </div>

      <div className='my_job flex'>
       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="business-outline"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Web Design</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline" style={{color:mode ? '#a9afc3' : '#0f172a'}}></ion-icon></span>
       </div>

       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="image-outline"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Graphigs Design</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline" style={{color:mode ? '#a9afc3' : '#0f172a'}}></ion-icon></span>
       </div>

       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="color-wand-outline"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Web Development</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline" style={{color:mode ? '#a9afc3' : '#0f172a'}}></ion-icon></span>
       </div>

       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="logo-apple"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>App Development</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline" style={{color:mode ? '#a9afc3' : '#0f172a'}}></ion-icon></span>
       </div>

       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="keypad-outline"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Photography</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline" style={{color:mode ? '#a9afc3' : '#0f172a'}}></ion-icon></span>
       </div>

       <div className='all_devoloper flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <ion-icon name="megaphone-outline"></ion-icon>
       <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Digital Marketing</h4>
       <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non quos rerum </p>
       <span className='flex' style={{color:mode ? '#a9afc3' : '#0f172a'}}>Learn More<ion-icon name="arrow-forward-outline style={{color:mode ? '#a9afc3' : '#0f172a'}}"></ion-icon></span>
       </div>
     
       
      </div>

      <div className='testimonial flex'>
      <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>What Client say</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Testimonial</span></h1>
       <div className='animated_bar'></div>
      </div>
     <div className='testimonial_center flex'>
      <div className='slider_all flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <img src={IMAGES.img1}/>
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus </span>
       <span className='ulduz flex'>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        </span>
      </div>

      <div className='slider_all flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <img src={IMAGES.img3}/>
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus </span>
       <span className='ulduz flex'>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        </span>
      </div>

      <div className='slider_all flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <img src={IMAGES.img4}/>
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus </span>
       <span className='ulduz flex'>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        </span>
      </div>
     </div>

     <div className='statistic_center flex'>
     <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>This Are My Stronges Sides</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>Working <span>Statistics</span></h1>
       <div className='animated_bar'></div>
      </div>
      <div className='statistic flex'>
      <div className='statistic_one flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
      <div className="row flex">
            <span className="num" data-val="39" style={{color:mode ? '#fff' : '#0f172a'}}>000</span>
            <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Happy Clients</p>
        </div>
       </div>
 
       <div className='statistic_one  flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <div className="row flex">
            <span className="num" data-val="77" style={{color:mode ? '#fff' : '#0f172a'}}>000</span>
            <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Award Winning</p>
        </div>
       </div>
 
       <div className='statistic_one  flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <div className="row flex">
            <span className="num" data-val="231" style={{color:mode ? '#fff' : '#0f172a'}}>000</span>
            <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Completed Projects</p>
        </div>
       </div>
       <div className='statistic_one  flex' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
       <div className="row flex">
            <span className="num" data-val="624" style={{color:mode ? '#fff' : '#0f172a'}}>000</span>
            <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Cup Of  Coffees</p>
        </div>
       </div>
      </div>
      
     </div>

      </div>
       </div>
      </section>
    </>
  )
}

export default services
