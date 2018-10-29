import React, { Component } from 'react';
import "./TechPage.css";
import {TechSlider} from "../TechSlider/TechSlider";

export class TechPage extends Component {
    render() {
        return (
            <div id="TechPage">
                <h3>Technology/Languages</h3>
                <TechSlider name="HTML5" value="50"/>
                <TechSlider name="CSS" value="50"/>
                <TechSlider name="JavaScript" value="50"/>
                <p className="tech-info">
                    Experience using JavaScript for frontend
                    and backend purposes across a variety of frameworks
                    such as React and Angular
                </p>
                <TechSlider name="React" value="50"/>
                <p className="tech-info">
                    Experience creating web applications
                    with React framework. Additional experience
                    using React Redux, React router.
                </p>
                <TechSlider name="Angular" value="40"/>
                <TechSlider name="Node.js" value="50"/>
                <p className="tech-info">
                    Experience using Node.js for backend web development
                    purposes such as creating RESTful APIs,
                    HTML server, and socket servers.
                </p>
                <TechSlider name="C++" value="50"/>
                <p className="tech-info">
                    Experience using C++ for educational purposes such
                    as data structures. Knowledge of pointers, polymorphism,
                    inheritance, software design patterns, data structures,
                    and multithreading. Additional knowledge of C++ for developing Windows games
                    using DirectX API.
                </p>
                <TechSlider name="Java" value="50"/>
                <p className="tech-info">
                    Experience using Java for educational purposes
                    learning topics such as inheritance, multithreading,
                    and software design patterns. Experience using Java for
                    Android app development and creating Windows application
                    using JavaFX. Beginner knowledge using Java for backend
                    services using Spring Boot.
                </p>
                <TechSlider name="Python" value="40"/>
                <p className="tech-info">
                    Experience creating GUIs for Windows applications
                    using Qt. Experience with socket and network
                    programming creating TCP server/client.
                </p>
                <TechSlider name="Swift" value="40"/>
                <p className="tech-info">
                    Experience using Swift for iOS app
                    development.
                </p>
                <TechSlider name="RESTful APIs" value="50"/>
                <p className="tech-info">
                    Experience designing and testing RESTful API for web
                    services. Developed RESTful APIs using Node.js as well
                    as Java Spring Boot and unit tested with Mocha/Chai.
                </p>
                <TechSlider name="GitHub" value="50"/>
                <TechSlider name="Heroku" value="50"/>
                <p className="tech-info">
                    Experience deploying websites and backend servers on Heroku
                </p>
            </div>
        );
    }
}


