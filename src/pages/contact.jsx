import React from 'react'
import { useSelector} from 'react-redux';
const contact = () => {
  const { mode } = useSelector((state) => state.darkMode)
  return (
    <>
      <div id='contact' className='contact flex' style={{background:mode ? '#0b0b13' : '#fff'}}>
      <div className='rov'>
       <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Contact</span>
       <h1 style={{color:mode ? '#fff' : '#0f172a'}}>My <span>Contact</span></h1>
       <div className='animated_bar'></div>
      </div>

      <div className='contact_center flex' >
       <p style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>

       <div className='contact_info flex'>
        <div className='contact_outher flex'>
          <div className='flex'>
          <span className='flex span1'><ion-icon name="location-outline"></ion-icon></span>
          <div className='text_contaxt flex'>
          <h4 style={{color:mode ? '#fff' : '#3c3e41'}}>Address</h4>
            <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>53,Anywhere in the world</span>
          </div>
          </div>

          <div className='flex'>
          <span className='flex span1'><ion-icon name="mail-open-outline"></ion-icon></span>
          <div className='text_contaxt flex'>
          <h4 style={{color:mode ? '#fff' : '#3c3e41'}}>Email Us</h4>
            <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>Infiadd@mail</span>
          </div>
          </div>

          <div className='flex'>
          <span className='flex span1'><ion-icon name="call-outline"></ion-icon></span>
          <div className='text_contaxt flex'>
          <h4 style={{color:mode ? '#fff' : '#3c3e41'}}>Call Me</h4>
            <span style={{color:mode ? '#a9afc3' : '#3c3e41'}}>(055) 555 66 11</span>
          </div>
          </div>
        </div>
        <div className='contact_outher2'>
          <div className='input1 flex'>
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Your email'/>
          </div>
          <textarea name='message' placeholder='Message'></textarea>
          <button type='submit'>Send Request</button>
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default contact
