import React,{useEffect,useState} from 'react'
import './styles.css'
import dp from '../../img/dp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBackward } from '@fortawesome/free-solid-svg-icons'

export default function UserDetails() {
    const [collapse,setCollapse]=useState(0);
    var collapseChatt=()=>{
        if(collapse===0){
            setCollapse(1);
        }else{
            setCollapse(0);
        }
    }
    useEffect(()=>{
        document.getElementById("chatting-area-toggle").style.display="none"
        document.getElementById("contact-area-toggle").style.display="block"
    },[collapse])
    return (
        <div className=" container-fluid user-details my-1">
            <div className="row">
                <div className="col-2 d-sm-none">
                    <a href="#home" onClick={collapseChatt} >
                    <FontAwesomeIcon icon={faBackward} style={{paddingTop:"10px"}} size="lg"/>
                    </a>
                </div>
                <div className="col-4 pl-5 logo">
                    Accertix
                </div>
                <div className="col-6">
                    <div className="d-flex float-right">
                        <FontAwesomeIcon icon={faBell} className="my-auto mx-3" color="#F3AC51" />
                        <img className="dp mx-3" src={dp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
