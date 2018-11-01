import React, { Component } from 'react';
import "./Home.css";
import {ContactLinks} from "../ContactLinks/ContactLinks";

export class Home extends Component {
    render() {
        return (
            <div id="Home">
                <h1>Welcome</h1>
                <div id="home-content">
                    <p>
                        Welcome to my website! My name is Ben Dagg, I am a Computer Science graduate and aspiring software engineer. Here you can find information on my
                        background as a programmer as well as samples of various websites
                        and projects I have worked on. Please feel free to contact me with
                        questions regarding my background.
                    </p>
                </div>
                <div id="home-links">
                    <ContactLinks/>
                </div>
            </div>
        );
    }
}


