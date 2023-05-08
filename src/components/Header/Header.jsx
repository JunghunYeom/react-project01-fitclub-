import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import {Link} from 'react-scroll';


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo' />
        {menuOpend=== false && mobile === true ? (
          <div 
          style={{
            bakcgroundColor: '#3c3f45',
            padding: '0.5rem',
            borderRadius: "5px"
          }}

          onClick={() => {
            setMenuOpend(true)
          }}
          >
            <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li>
              <Link onClick={() => setMenuOpend(false)}
              to="home"
              span={true}
              smooth={true}>Home</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpend(false)}
              to="programs"
              span={true}
              smooth={true}>Programs</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpend(false)}
              to="join-us"
              span={true}
              smooth={true}>Why us</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpend(false)}
              to="plans"
              span={true}
              smooth={true}>Plans</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpend(false)}
              to="testimonials"
              span={true}
              smooth={true}>Testimonials</Link>
            </li>
          </ul>
        )}
    </div>
  )
}

export default Header