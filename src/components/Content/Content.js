import React, { Component } from 'react';
import "./Content.css";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import {ContactLinks} from "../ContactLinks/ContactLinks";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {AboutPage} from "../AboutPage/AboutPage";
import {PortfolioWeb} from "../PortfolioWeb/PortfolioWeb";

import {Header} from "../Header/Header";
import {PortfolioViewer} from "../PortfolioViewer/PortfolioViewer";

export class Content extends Component {
    render() {
        return (
            <div id="MainContent">
                <Router>
                    <div>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/portfolio/web" component={PortfolioWeb}/>
                        <Route path="/portfolio/:id" component={PortfolioViewer}/>
                    </div>
                </Router>
            </div>
        );
    }
}


