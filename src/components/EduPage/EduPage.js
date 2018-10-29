import React, { Component } from 'react';
import "./EduPage.css";

export class EduPage extends Component {
    render() {
        return (
            <div id="EduPage">
                <h3 className="header">Education</h3>
                <img id="csumb-logo" src={require("../../images/csumb_logo.jpg")}/>
                <p>
                    Benjamin Dagg graduated from California State
                    University Monterey Bay(CSUMB) in May of 2018 with Cum Laude
                    Honors. He earned a Bachelor's of Science degree in Computer
                    Science and Information Technology with a concentration in software
                    engineering. His overall GPA while attending CSUMB was 3.6 out of 4.0.
                </p>
                <br/>

                <p>
                    Benjamin Dagg's Computer Science coursework includes
                    Operating Systems, Data Structures, Computer Architecture,
                    Calculus I, Algorithms, Discrete Math, Computer Networking, Software Engineering,
                    Software Design, Game Development, IOS Development, and Web Development
                </p>
            </div>
        );
    }
}


