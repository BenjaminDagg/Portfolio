import React, { Component } from 'react';
import "./SideMenu.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


export class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aboutMenuShowing: true,
            portfolioIsOpen: true,
            contactOpen: true
        };

        this.toggleContact = this.toggleContact.bind(this);
        this.togglePrtfolioMenu = this.togglePrtfolioMenu.bind(this);
        this.toggleAboutMenu = this.toggleAboutMenu.bind(this);
    }

    toggleAboutMenu() {
        console.log('clicked');
        this.setState({aboutMenuShowing: !this.state.aboutMenuShowing});
    }

    togglePrtfolioMenu() {
        console.log('clicked');
        this.setState({portfolioIsOpen: !this.state.portfolioIsOpen});
    }

    toggleContact() {
        this.setState({conttactOpen: !this.state.contactOpen});
    }

    render() {
        return (
            <div id="SideMenu">
                <Paper style={{'padding': '3px'}} elevation={1}>
                    <button onClick={this.toggleAboutMenu} className="menu-btn-main">About</button>
                    {this.state.aboutMenuShowing &&
                        <div id="about-submenu" className="submenu">
                            <a href={"/about#edu"}>
                                <button className="menu-btn-sub">Education</button>
                            </a>
                            <a href="/about#work">
                                <button className="menu-btn-sub">Work Experience</button>
                            </a>
                            <a href={"/about#work"}>
                                <button className="menu-btn-sub">Technology/Languages</button>
                            </a>
                        </div>
                    }

                    <button onClick={this.togglePrtfolioMenu} className="menu-btn-main">Portfolio</button>
                    {this.state.portfolioIsOpen &&
                        <div id="about-submenu" className="submenu">
                            <a href={"/portfolio/web"}>
                                <button className="menu-btn-sub">Websites</button>
                            </a>
                            <button className="menu-btn-sub">Other</button>

                        </div>
                    }
                    <button onClick={this.toggleContact} className="menu-btn-main">Contact</button>
                    {this.state.contactOpen &&
                        <div id="about-submenu" className="submenu">
                            <button className="menu-btn-sub">Websites</button>
                            <button className="menu-btn-sub">Other</button>

                        </div>
                    }
                </Paper>
            </div>
        );
    }
}




