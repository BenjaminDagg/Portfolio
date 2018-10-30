import React, { Component } from 'react';
import "./ContactPage.css";

export class ContactPage extends Component {
    render() {
        return (
            <div id="ContactPage">
                <div id="contactContent">
                    <h3>Contact Me</h3>
                    <div id="phoneContacts">
                        <div class="contactContainer">
                            <img src={require('../../images/email.svg')}/><span>bdagg@csumb.edu</span>
                        </div>
                        <div className="contactContainer">
                            <img src={require('../../images/phone.svg')}/><span>(661)220-0748</span>
                        </div>
                    </div>
                    <div id="socialContacts">
                        <div class="contactContainer2">
                            <span>github.com/BenjaminDagg</span><img src={require('../../images/github.svg')} />
                        </div>

                        <div className="contactContainer2">
                            <span>linkedin.com/in/benjamin-dagg</span><img  src={require('../../images/lin.png')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


