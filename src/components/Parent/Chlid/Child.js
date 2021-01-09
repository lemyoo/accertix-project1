import React from 'react'
import './styles.css'

export default function Child(props) {
    return (
        <div className="row child" >
            <span id={props.child}>{props.child}</span>
        </div>
    )
}
