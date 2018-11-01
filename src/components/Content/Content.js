import React, { Component } from 'react';
import "./Content.css";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import {ContactLinks} from "../ContactLinks/ContactLinks";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {AboutPage} from "../AboutPage/AboutPage";
import {PortfolioWeb} from "../PortfolioWeb/PortfolioWeb";
import {EduPage} from "../EduPage/EduPage";
import {WorkPage} from "../WorkPage/WorkPage";
import {Header} from "../Header/Header";
import {PortfolioViewer} from "../PortfolioViewer/PortfolioViewer";
import {TechPage} from "../TechPage/TechPage";
import {PortfolioOther} from "../PortfolioOther/PortfolioOther";
import Paper from '@material-ui/core/Paper';
import {ContactPage} from "../ContactPage/ContactPage";
import {Home} from "../Home/Home";

export class Content extends Component {
    render() {
        return (
            <div id="MainContent">
                <Paper elevation={4}>
                    <Router>
                        <div>
                            <Route exact={true} path="/" component={Home}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route path="/portfolio/web" component={PortfolioWeb}/>
                            <Route path="/portfolio/other" component={PortfolioOther}/>
                            <Route path="/portfolio/:id" component={PortfolioViewer}/>
                            <Route path="/about/education" component={EduPage}/>
                            <Route path="/about/work" component={WorkPage}/>
                            <Route path="/about/tech" component={TechPage}/>

                        </div>
                    </Router>
                </Paper>
            </div>
        );
    }
}


