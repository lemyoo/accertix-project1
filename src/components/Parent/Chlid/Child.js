import React,{useEffect,useState} from 'react'
import './styles.css'



export default function Child(props) {
    const [expand,setExpand]=useState(false);
    var toggleExpand=()=>{
        if (expand){
            setExpand(false);
            
        }else{
            setExpand(true)
        }
    }

    useEffect(() => {
        console.log(expand)
        console.log('resized to',window.innerWidth);
        if(expand && window.innerWidth<576){
            document.getElementById("chatting-area-toggle").style.display="block"
            document.getElementById("contact-area-toggle").style.display="none"
        }

    },[expand])
    return (
        <div className="row child" >
            <a href="#home" onClick={toggleExpand}>
                <span id={props.child}>{props.child}</span>
            </a>
        </div>
    )
}
