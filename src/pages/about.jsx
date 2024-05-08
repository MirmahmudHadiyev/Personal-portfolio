import React, { useEffect } from 'react'
import {Link} from 'react-scroll'
import IMAGES from '../assets/images'
import { useSelector} from 'react-redux';
const about = () => {

  const { mode } = useSelector((state) => state.darkMode)

  
  useEffect(()=>{
    const resume_single_list = document.querySelectorAll(".resume_single_list")
    
    resume_single_list.forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })

    resume_single_list.forEach(item =>{
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

  useEffect(()=>{
    const skills_bar = document.querySelectorAll(".skills_bar")
    skills_bar.forEach(item =>{
      if(!mode){
        item.classList.add('resume_single_shado')
      }else{
        item.classList.remove('resume_single_shado')
      }
    })

  })
  return (
    <div id='about' className='about' style={{background:mode ? '#0b0b13' : '#f1f2f6'}}>
      
          <div className='center1'>
          <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>My Intro</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>About <span>Me</span></h1>
       <div className='animated_bar'></div>
      </div>
      <div>
      <div className='center_left1'>
          <div className='center_left_img'>
          <img src={IMAGES.about}/>
          </div>
         </div>
         <div className='center_right1'>
           <p style={{color:mode ? '#a9afc3' : '#3c3e41'}}>personal info:</p>
           <div className='center_right_list'>
            <ul>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>First Name</span>Mirmahmud</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Last Name</span>Hadiyev</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Birthdate</span>08 yanvar 1996</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Nationality</span>Azərbaycanlı</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Experience</span>10 year</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Address</span>Sulutepe</h6></li>
            </ul>

            <ul>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Freelance</span>Available</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Language</span>Azərbaycan</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Phone</span>+994 055 555 55 </h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Email</span>first@gmail.com</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Skype</span>first@</h6></li>
              <li><h6 style={{color:mode ? '#a9afc3' : '#3c3e41'}}><span>Dreeble</span>Mmm.dribble</h6></li>
            </ul>
           </div>
           <Link to='contact' spy={true} smooth={true} duration={1000}>Hire Me</Link>
         </div>
      </div>
         
        </div>

        <div className='personal_experience'>
         <div className='center_personal_experience'>
         <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>My Check Out Of My Resume</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Resume</span></h1>
       <div className='animated_bar'></div>
      </div>
      <div className='rov_center'>
        <div className='col'>
          <h4 className="education" style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Education</h4>
          <div className='education_text'>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
            <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>BSC of Software Systems</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Iqtisad universiteti(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
           <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>MSC of Software Systems</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Iqtisad universiteti(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
           <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Diploma in Computer Science</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Colloge Of Habhit(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
          </div>
        </div>
        <div className='col'>
          <h4 className="education" style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Experience</h4>
          <div className='education_text'>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
            <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Wev design and Development</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Coders present(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
           <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>MSC of Software Systems</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Iqtisad universiteti(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
           <div className='resume_single_list' style={{ background:mode ? '#141421' :'#f1f2f6'}}>
           <div>
              <h4 style={{color:mode ? '#fff' : '#0f172a'}}>Diploma in Computer Science</h4>
              <h3 style={{color:mode ? '#a9afc3' : '#0f172a'}}>Colloge Of Habhit(2013-2017)</h3>
              <p style={{color:mode ? '#a9afc3' : '#0f172a'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit enim odio adipisci, id nostrum sequi quod debitis in a, deserunt commodi atque ad optio eum molestias animi temporibus? Ipsa?</p>
            </div>
           </div>
          </div>
        </div>
        
      </div>
         </div>
        </div>

        <div className='personal_skils' style={{background:mode ? '#10101a' : '#fff'}}>
          <div className='center_personal_skils'>
          <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>My Level Of Knowledge In Some Tools</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Skills</span></h1>
       <div className='animated_bar'>
        
       </div>
      </div>
<div className='rov_center'>
 <div className='design_skills' >
  <h4 className="education" style={{color:mode ? '#fff' : '#0f172a'}}>Design Skill</h4>
  <div className='skills_bar' style={{background:mode ? '#141421' : '#fff'}}>
<div className='bar'>
  <div className='info'>
    <span>Photoshop</span>
  </div>
  <div className='progress_line Photoshop'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Figma</span>
  </div>
  <div className='progress_line Figma'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Adobe Xd</span>
  </div>
  <div className='progress_line Adobe_Xd'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Adobe Illustration</span>
  </div>
  <div className='progress_line Adobe'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Design</span>
  </div>
  <div className='progress_line Design'>
    <span></span>
  </div>
</div>
  </div>
 </div>

 <div className='design_skills'>
  <h4 className="education" style={{color:mode ? '#fff' : '#0f172a'}}>Code Skill</h4>
  <div className='skills_bar' style={{background:mode ? '#141421' : '#fff'}}>
<div className='bar'>
  <div className='info'>
    <span>Html</span>
  </div>
  <div className='progress_line Html'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Css</span>
  </div>
  <div className='progress_line css'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Bootstrap</span>
  </div>
  <div className='progress_line Bootstrap'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>Sass</span>
  </div>
  <div className='progress_line Sass'>
    <span></span>
  </div>
</div>
<div className='bar'>
  <div className='info'>
    <span>React</span>
  </div>
  <div className='progress_line React'>
    <span></span>
  </div>
</div>
  </div>
 </div>

</div>

          </div>
        </div>
    </div>
  )
}

export default about
