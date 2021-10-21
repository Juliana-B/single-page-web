import React from 'react';
import Box from './Box';
import image1 from '../Images/s1.png';
import image2 from '../Images/s2.png';


const Services = () => {
    return (
        <div id='services'>
            <div className="s-heading">
                <h1>Services</h1>
                <p>Here are some services I provide</p>
            </div>

            <div className="b-container">
                <Box image={image1} alt='image1' button='PYTHON'/>
                <Box image={image2} alt='image1' button='REACT'/>
            </div>
        </div>
    )
}

export default Services
 