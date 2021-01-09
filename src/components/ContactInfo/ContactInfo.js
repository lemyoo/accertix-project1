import React from 'react'
import './styles.css'
import dp from '../../img/dp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons'

export default function ContactInfo() {
    return (
        <div className="main-contactInfo container-fluid">
            <div className="row">
                <div className="my-dp">
                    <img className="rounded-circle my-dp" src={dp} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="user-name">
                    Parent 1
                </div>
            </div>
            <div className="row">
                <div className="active">
                    <span className="dot"></span>Active Now
                </div>
            </div>
            <div className="row mx-4 mt-3 font-background justify-content-center">
                <div className="col-4 ">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="col-4 ">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="col-4 ">
                    <FontAwesomeIcon icon={faCamera} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-1 mt-3 contact-header">
                    Email
                </div>
                <div className="col-12 mb-1 contact-detail">
                    example@gmail.com
                </div>
                <div className="col-12 mb-1 contact-header">
                    Phone
                </div>
                <div className="col-12 mb-1 contact-detail">
                    +233 020 000 0000
                </div>
                <div className="col-12 mb-1 contact-header">
                    Address
                </div>
                <div className="col-12 mb-1 contact-detail">
                    132, My Street
                </div>
            </div>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-light my-btn-design">
                        BLOCK
                    </button>
                </div>
            </div>
        </div>
    )
}
