import React, { Component } from 'react';
import "./WorkPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class WorkPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h3 style={{'text-align':'center'}}>Work Experience</h3>
                    </div>
                </div>
                <div style={{'text-align':'left'}} className="row">
                    <div className="col-12">
                        <h4>Web Developer Intern</h4>
                    </div>
                    <div className="col-12">
                        <ul>
                            <li>
                                Tatum Games
                            </li>
                            <li>
                                Oct, 2018 - Feb, 2019
                            </li>
                            <li>
                                Interned at Tatum Games mobile game company. Responsible for maintaining and creating content for company website
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{'text-align':'left'}} className="row">
                    <div className="col-12">
                        <h4>Ride Operator</h4>
                    </div>
                    <div className="col-12">
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
                    </div>
                </div>
                <div style={{'text-align':'left'}} className="row">
                    <div className="col-12">
                        <h4 className="job-header">Busser</h4>
                    </div>
                    <div className="col-12">

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
                    </div>
                </div>
                <div style={{'text-align':'left'}} className="row">
                    <div className="col-12">
                        <h4>Volunteer</h4>
                    </div>
                    <div className="col-12">
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
                                support
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}


