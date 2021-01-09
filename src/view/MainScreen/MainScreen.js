import React from 'react'
import ContactList from '../../components/ContactList/ContactList'
import ChattingArea from '../../components/ChattingArea/ChattingArea'
import UserDetails from '../../components/UserDetails/UserDetails'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import './styles.css';

function MainScreen() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 mb-2">
                    <UserDetails />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-5 col-md-3">
                    <div className="contact-list">
                        <ContactList />
                    </div>
                </div>
                <div className="col-sm-7 col-md-6 d-none d-sm-block">
                    <div className="chatt-window">
                        <ChattingArea />
                    </div>
                </div>
                <div className="col-md-3 pl-1 d-none d-sm-block">
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default MainScreen;