import React, { Component } from 'react';
import "./EduPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class EduPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6">

                        <img id="csumb-logo" src={require("../../images/csumb_logo.jpg")}/>

                    </div>
                    <div className="col-12 col-md-6">
                        
                        <ul className="edu-list" id="school-list">
                        <h3 style={{'text-align':'center'}}>Education</h3>
                            <li>
                                <strong>Bachelor's of Science - Computer Science and Information Technology</strong>
                                <ul>
                                    <li>
                                        California State University Monterey Bay (CSUMB)
                                    </li>
                                    <li>Graduated with Cum Laude Honors</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    

                </div>
                <div className="row justify-content-center">
                        <div className="col-12 col-md-5 order-2 order-md-1">
                            <h3>Certifications</h3>
                            <ul className="edu-list">
                                <li>
                                    <strong>Comptia A+ Certification</strong> - Computer technician and IT professional Certification
                                    covering computers, software, hardware, operating systems, troubleshooting, and information security
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-5 order-md-2 order-1">
                            <img id="comptia-logo" src={require("../../images/comptiaimg.jpg")}/>
                        </div>
                    </div>

            </div>
        );
    }
}


