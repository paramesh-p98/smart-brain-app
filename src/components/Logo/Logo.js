import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt
                className="tilt-img br2 shadow-2"
                tiltMaxAngleX={35}
                tiltMaxAngleY={35}
                perspective={900}
                scale={1.1}
                transitionSpeed={2000}
                gyroscope={true}
            >
                <div className='pa3'>
                    <img style={{ paddingTop: '5px' }} src="https://img.icons8.com/wired/64/000000/brain.png" alt='brain logo' />
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;

