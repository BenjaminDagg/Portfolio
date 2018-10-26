import React, { Component } from 'react';
import "./AboutPage.css"
import {TechSlider} from "../TechSlider/TechSlider";

export class AboutPage extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var hash = window.location.hash;
        hash = hash.replace('#','');
        if (hash) {
            console.log(hash);
            document.getElementById(hash).scrollIntoView();
        }
    }

    render() {
        return (
            <div id="AboutPage">
                <div class="about-section" id="edu">
                    <h3 class="header">Education</h3>
                    <img id="csumb-logo" src={require("../../images/csumb_logo.jpg")}/>
                    <p>
                        Benjamin Dagg graduated from California State
                        University Monterey Bay(CSUMB) in May of 2018 with Cum Laude
                        Honors. He earned a Bachelor's of Science degree in Computer
                        Science and Information Technology with a concentration in software
                        engineering. His overall GPA while attending CSUMB was 3.6 out of 4.0.
                    </p>
                    <br />

                    <p>
                        Benjamin Dagg's Computer Science coursework includes
                        Operating Systems, Data Structures, Computer Architecture,
                        Calculus I, Algorithms, Discrete Math, Computer Networking, Software Engineering,
                        Software Design, Game Development, IOS Development, and Web Development
                    </p>

                </div>
                <div class="about-section" id="work">
                    <h3>Work Experience</h3>
                    <h4>Ride Operator</h4>
                    <ul>
                        <li>
                            Six Flags Magic Mountain
                        </li>
                        <li>
                            May, 2015 - Sep, 2015
                        </li>
                        <li>
                            Organized visitors into lines and assisted with ride operations
                        </li>
                    </ul>
                    <h4>Busser</h4>
                    <ul>
                        <li>
                            IHOP Restaurant
                        </li>
                        <li>
                            May, 2016 - Sep, 2016
                        </li>
                        <li>
                            Multi-tasked dishwashing, cleaning tables in fast paced work environment
                        </li>
                    </ul>
                    <h4>Volunteer</h4>
                    <ul>
                        <li>
                            Loaves, Fishes, and Computers
                        </li>
                        <li>
                            Jan, 2018 - May, 2018
                        </li>
                        <li>
                            Volunteered at a non-profit computer repair shop
                            in Salinas, CA. Responsible for refurbishing computers, testing hardware, customer tech
                            suppor
                        </li>
                    </ul>
                </div>
                <div id="tech" class="about-section">
                    <h3>Technology/Languages</h3>
                    <TechSlider name="HTML5" value="50"/>
                    <TechSlider name="CSS" value="50"/>
                    <TechSlider name="JavaScript" value="50"/>
                    <p class="tech-info">
                        Experience using JavaScript for frontend
                        and backend purposes across a variety of frameworks
                        such as React and Angular
                    </p>
                    <TechSlider name="React" value="50"/>
                    <p class="tech-info">
                        Experience creating web applications
                        with React framework. Additional experience
                        using React Redux, React router.
                    </p>
                    <TechSlider name="Angular" value="40"/>
                    <TechSlider name="Node.js" value="50"/>
                    <p class="tech-info">
                        Experience using Node.js for backend web development
                        purposes such as creating RESTful APIs,
                        HTML server, and socket servers.
                    </p>
                    <TechSlider name="C++" value="50"/>
                    <p class="tech-info">
                        Experience using C++ for educational purposes such
                        as data structures. Knowledge of pointers, polymorphism,
                        inheritance, software design patterns, data structures,
                        and multithreading. Additional knowledge of C++ for developing Windows games
                        using DirectX API.
                    </p>
                    <TechSlider name="Java" value="50"/>
                    <p class="tech-info">
                        Experience using Java for educational purposes
                        learning topics such  as inheritance, multithreading,
                        and software design patterns. Experience using Java for
                        Android app development and creating Windows application
                        using JavaFX. Beginner knowledge using Java for backend
                        services using Spring Boot.
                    </p>
                    <TechSlider name="Python" value="40"/>
                    <p class="tech-info">
                        Experience creating GUIs for Windows applications
                        using Qt. Experience with socket and network
                        programming creating TCP server/client.
                    </p>
                    <TechSlider name="Swift" value="40"/>
                    <p class="tech-info">
                        Experience using Swift for iOS app
                        development.
                    </p>
                    <TechSlider name="RESTful APIs" value="50"/>
                    <p class="tech-info">
                        Experience designing and testing RESTful API for web
                        services. Developed RESTful APIs using Node.js as well
                        as Java Spring Boot and unit tested with Mocha/Chai.
                    </p>
                    <TechSlider name="GitHub" value="50"/>
                    <TechSlider name="Heroku" value="50"/>
                    <p class="tech-info">
                        Experience deploying websites and backend servers on Heroku
                    </p>
                </div>
            </div>
        );
    }
}


