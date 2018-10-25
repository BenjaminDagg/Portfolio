import React, { Component } from 'react';
import "./Content.css";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import {ContactLinks} from "../ContactLinks/ContactLinks";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import {Header} from "../Header/Header";

export class Content extends Component {
    render() {
        return (
            <div id="MainContent">
                <Router>
                    <div>
                        <Route path="/about/education" component={ContactLinks}/>
                        <Route path="/about/technology" component={Header}/>
                    </div>
                </Router>
            </div>
        );
    }
}


