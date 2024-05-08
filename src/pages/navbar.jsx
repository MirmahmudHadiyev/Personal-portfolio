import react, { useEffect } from 'react'
import {Link} from 'react-scroll'
import { useSelector} from 'react-redux';
const navbar = () => {
  const { mode } = useSelector((state) => state.darkMode)

  
  return (
    <>
     
    <nav className='nav' style={{background:mode ? '#10101a' : '#fff'}}>
    <div className='logo_div'>
    <Link style={{color:mode ? '#cec4c0' : '#3c3e41'}} to='hero' spy={true} smooth={true}  duration={1000}>
    <ion-icon name="accessibility-outline"></ion-icon>
    </Link>
    
    </div>
    <div className='link_div'>
      <ul>
        <li className='li'><Link className='before' style={{color: '#ff4904'}} to='hero' spy={true} smooth={true} offset={-100} duration={1000}>Home</Link></li>
        <li className='li'><Link style={{color:mode ? '#cec4c0' : '#3c3e41'}}  to='about' spy={true} smooth={true} offset={-100} duration={1000} activeClass='ahover'>About</Link></li>
        <li className='li'><Link style={{color:mode ? '#cec4c0' : '#3c3e41'}} to='services' spy={true} smooth={true} offset={10} duration={1000} activeClass='ahover'>Services</Link></li>
        <li className='li'><Link style={{color:mode ? '#cec4c0' : '#3c3e41'}} to='portfolio' spy={true} smooth={true} offset={10} duration={1000} activeClass='ahover'>Portfolio</Link></li>
        <li className='li'><Link style={{color:mode ? '#cec4c0' : '#3c3e41'}} to='blog' spy={true} smooth={true} offset={-100} duration={1000} activeClass='ahover'>Blog</Link></li>
        <li className='li'><Link style={{color:mode ? '#cec4c0' : '#3c3e41'}} to='contact' spy={true} smooth={true} offset={-100} duration={1000} activeClass='ahover'>Contact</Link></li>
      </ul>
    </div>

    </nav>
   
    </>
  )
}

export default navbar
