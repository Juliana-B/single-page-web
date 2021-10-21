import React from 'react';
import featureimage from '../Images/Frame19.png';

const Features = () => {
    return (
        <div id='features'>
            <div className="features-model">
                <img src={featureimage} alt='feature-model' />
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos quasi, facilis id, voluptates cum eligendi est doloribus totam veritatis laborum necessitatibus eius, inventore neque fugiat harum repellendus quod iusto tempora. 
                    Ab ex facilis incidunt sed aspernatur impedit necessitatibus aliquam.
                </p>
                <button>View More Features</button>
            </div>
        </div>
    )
}

export default Features
