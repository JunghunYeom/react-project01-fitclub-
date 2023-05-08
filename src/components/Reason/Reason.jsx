import React from 'react'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import './Reason.css';

const Reason = () => {
  return (
    <div className='Reason' id="reason">
        <div className='left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className='right-r'>
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>why</span>
                <span>choose us?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <sapn>OVER 140+ EXPERT COACHS</sapn>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <sapn>TRAIN SMARTER AND FASTER THAN BEFORE</sapn>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <sapn>1 FREE PROGRAM FOR NEW MEMBER</sapn>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <sapn>RELIABLE PARTNERS</sapn>
                </div>
            </div>
            <span style={{
                color: 'var(--gray)',
                fontweight: 'normal'
            }}>OUR PARTNERS</span>

            <div className='partners'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reason