import React, { useState } from 'react'
import './styles.css'
import dp from '../../img/dp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { showChatAction } from '../../actions/Actions'
import Child from './Chlid/Child'



const Parent = (props) => {
    const childrenOf = props.childrenOf;
    const child1=props.child1;
    const child2=props.child2;
    const child3=props.child3;
    const [show, setShow] = useState("block");
    const toggleAction = () => {
        if (show === "none") {
            setShow("block");
            console.log(show);
            return show;
        } else {
            setShow("none");
            console.log(show);
            return show;
        }
    }
    props.showChatAction("openme");
    const openChild = () => {
        document.getElementById(childrenOf).style.display=toggleAction();
        document.getElementById(child1).style.paddingLeft = "10px";
        document.getElementById(child1).style.paddingTop = "10px";
        document.getElementById(child1).style.paddingBottom = "10px";
        document.getElementById(child2).style.paddingLeft = "10px";
        document.getElementById(child2).style.paddingTop = "10px ";
        document.getElementById(child2).style.paddingBottom = "10px";
        document.getElementById(child3).style.paddingLeft = "10px";
        document.getElementById(child3).style.paddingTop = "10px ";
        document.getElementById(child3).style.paddingBottom = "10px ";
    }
    return (
        <div>
            <a href="#home" onClick={openChild}>
                <div className="container-fluid counter-style counter-counter main ">
                    <div className=" row ">
                        <div className="col-3">
                            <img className="my-image" src={dp} alt="profile pic" />
                        </div>
                        <div className="col-7">
                            <div className="name">
                                {props.name}
                            </div>
                        </div>
                        <div className="col-2 font-style">
                            <FontAwesomeIcon icon={faDotCircle} size="xs" />
                        </div>
                    </div>
                </div>
            </a>
            <div className="container-fluid" id={props.childrenOf} style={{display:"none"}}>
                <Child child={child1} />
                <Child child={child2} />
                <Child child={child3} />
            </div>
        </div>
    )
}
let mapDispatchToProps = { showChatAction };
export default connect(null, mapDispatchToProps)(Parent)