import React, { Component } from 'react';
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactLinks} from "../ContactLinks/ContactLinks";

export class Footer extends Component {
    render() {
        return (
            <div id="footer" >
                <div className="row justify-content-center">
                    <div style={{'text-align':'center'}} className="col-12">
                        <ContactLinks/>
                    </div>
                </div>
            </div>
        );
    }
}


