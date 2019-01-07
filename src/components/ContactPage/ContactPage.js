import React, { Component } from 'react';
import "./ContactPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class ContactPage extends Component {
    render() {
        /*
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
        */
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h3>Contact Me</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 justify-content-start justify-content-md-end">
                        <div className="contactItem">
                            <img src={require('../../images/email.svg')}/><span>bdagg@csumb.edu</span>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 justify-content-start justify-content-md-start">
                        <div className="contactItem">
                            <img src={require('../../images/phone.svg')}/><span>(661)220-0748</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 justify-content-start justify-content-md-end">
                        <div className="contactItem">
                            <a className="contactURL" href="https://github.com/BenjaminDagg">
                            <img src={require('../../images/github.svg')} /><span>github.com/BenjaminDagg</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 justify-content-start justify-content-md-end">
                        <div className="contactItem">
                            <a className="contactURL" href="https://www.linkedin.com/in/benjamin-dagg-863926168/">
                            <img  src={require('../../images/lin.png')} /><span>linkedin.com/in/benjamin-dagg</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


