import React from 'react'
import './styles.css'
import dp from '../../img/dp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function UserDetails() {
    return (
        <div className=" container-fluid user-details my-1">
            <div className="row ">
            <div className="col-6 pl-5 logo">
                Accertix
            </div>
            <div className="col-6  ">
                <div className="d-flex float-right">
                <FontAwesomeIcon icon={faBell} className="my-auto mx-3" color="#F3AC51"/>
                <img className="dp mx-3" src={dp} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}
