import React from 'react'
import './index.css';

const Box = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Box 
