import React, { Component } from 'react';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import {ContactLinks} from "../ContactLinks/ContactLinks";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          sidebarOpen:false,
          animationDone: false
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }



    toggleSideBar(event) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }




    render() {
        return (
            <div id="header">
                <div id="avatar">
                    <Avatar id="profile_img" alt="Ben Dagg" src={require("../../images/profile_img.webp")} />

                </div>
                <h3 id="name-header">Benjamin Dagg</h3>
                <div id="navbar-container">
                    <nav className="nav">
                        <a className="nav-link" href="/">Home</a>
                        <div class="nav-dropdown">
                            <a href="#" className="nav-link nav-dropdown-trigger"
                               role="button">About</a>
                            <div className="nav-dropdown-content">
                                <a href="/about/education" className="dropdown-item">Education</a>
                                <div className="dropdown-divider"></div>
                                <a href="/about/work" className="dropdown-item">Work Experience</a>
                                <div className="dropdown-divider"></div>
                                <a href="/about/tech" className="dropdown-item">Technology</a>
                            </div>
                        </div>
                        <div className="nav-dropdown">
                            <a href="#" className="nav-link nav-dropdown-trigger"
                               role="button">Portfolio</a>
                            <div className="nav-dropdown-content">
                                <a href="/portfolio/web" className="dropdown-item">Websites</a>
                                <div className="dropdown-divider"></div>
                                <a href="/portfolio/other" className="dropdown-item">Other</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-link">Contact</a>
                    </nav>
                </div>
                <button onClick={this.toggleSideBar} ref="sidebar-toggle" className="navbar-toggler" type="button" id="sidebar-toggle-btn">☰</button>
                <div id="sidebar-navigation" style={{'text-align':'left'}} ref="sidebar" className={this.state.sidebarOpen ? 'navbar-side-open' : 'navbar-side-close'}>
                    <button onClick={this.toggleSideBar} id="sidebar-close">X</button>
                    <nav className="nav flex-column">
                        <a className="nav-link" href="/">Home</a>
                        <a href="/about/education" className="nav-link">Education</a>
                        <a href="/about/work" className="nav-link">Work</a>
                        <a href="/about/tech" className="nav-link">Technology</a>
                        <a href="/portfolio/web" className="nav-link">Websites</a>
                        <a href="/portfolio/other" className="nav-link">Other Projects</a>
                        <a href="/contact" className="nav-link">Contact</a>
                    </nav>
                </div>
                <div id="lightbox" className={this.state.sidebarOpen ? 'lightbox-open' : 'lightbox-close'}>

                </div>
            </div>
        );
    }
}


