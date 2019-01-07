import React, { Component } from 'react';
import "./Home.css";
import {ContactLinks} from "../ContactLinks/ContactLinks";
import 'bootstrap/dist/css/bootstrap.min.css';
import {portfolio_items} from "../../portfolio_items/portfolio_items";


export class Home extends Component {
    render() {


        return (
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>Welcome</h1>
                    </div>
                    <div className="col-12">
                        <div id="home-content">
                            <p>
                                Welcome! My name is Ben Dagg. I am a Computer Science graduate and an aspiring software engineer. Here you can find information on my
                                background as a programmer as well as samples of various websites
                                and projects I have worked on. Please feel free to contact me with
                                questions regarding my background.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


