import React from 'react'

const Box = (props) => {
    return (
        <div className='s-box'>
            <div className="s-b-img">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="s-b-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem cumque magnam, 
                    veniam quasi vitae neque eos beatae eveniet incidunt!
                </p>
                <a href='#id' className='cv-btn'>{props.button}</a>
            </div>
        </div>
    )
}

export default Box
