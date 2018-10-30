import React, { Component } from 'react';
import "./EduPage.css";

export class EduPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="ec">
                <div style={{'width':'40%','margin':'0 auto', 'vertical-align':'center'}}>
                    <h3 className="header">Education</h3>
                    <img id="csumb-logo" src={require("../../images/csumb_logo.jpg")}/>
                    <p style={{'text-align':'left','width':'100%','margin':'5px'}}>
                        Benjamin Dagg graduated from California State
                        University Monterey Bay(CSUMB) in May of 2018 with Cum Laude
                        Honors. He earned a Bachelor's of Science degree in Computer
                        Science and Information Technology with a concentration in software
                        engineering. His overall GPA while attending CSUMB was 3.6 out of 4.0.
                    </p>
                    <br/>

                    <p style={{'text-align':'left','width':'100%','margin':'5px'}}>
                        Benjamin Dagg's Computer Science coursework includes
                        Operating Systems, Data Structures, Computer Architecture,
                        Calculus I, Algorithms, Discrete Math, Computer Networking, Software Engineering,
                        Software Design, Game Development, IOS Development, and Web Development
                    </p>
                </div>
            </div>
        );
    }
}


