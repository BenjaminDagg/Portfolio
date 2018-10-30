import React, { Component } from 'react';
import "./WorkPage.css";

export class WorkPage extends Component {
    render() {
        return (
            <div id='workContainer'>
                <div id="WorkPage" style={{'text-align':'left','margin-left':'20px','margin-top':'20px'}}>
                    <h3>Work Experience</h3>
                    <h4 className="job-header">Ride Operator</h4>
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
                    <h4 className="job-header">Busser</h4>
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
                    <h4 className="job-header">Volunteer</h4>
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
            </div>
        );
    }
}


