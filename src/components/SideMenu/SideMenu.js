import React, { Component } from 'react';
import "./SideMenu.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';

const styles = {
    root: {
        background: '#ffffff'

    },
};

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}



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
                <Paper className={classNames(styles.root)} elevation={1}>
                    <AppBar  position="relative" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="primary" classes={styles.list_item}>
                                About
                            </Typography>

                        </Toolbar>
                        <List component="nav">
                            <a class="button-link" href="/about/education">
                                <ListItem button>
                                    <ListItemText primary="Education"/>
                                </ListItem>
                            </a>
                            <a class="button-link" href="/about/work">
                                <ListItem button>
                                    <ListItemText primary="Work Experience"/>
                                </ListItem>
                            </a>
                            <a className="button-link" href="/about/tech">
                                <ListItem button>
                                    <ListItemText primary="Technology"/>
                                </ListItem>
                            </a>
                        </List>
                        <Toolbar>
                            <Typography variant="h6" color="primary">
                                Portfolio
                            </Typography>
                        </Toolbar>
                        <List component="nav">
                            <a className="button-link" href="/portfolio/web">
                                <ListItem button>
                                    <ListItemText primary="Websites"/>
                                </ListItem>
                            </a>
                            <a className="button-link" href="/portfolio/other">
                                <ListItem button>
                                    <ListItemText primary="Other"/>
                                </ListItem>
                            </a>
                        </List>
                        <Toolbar>
                            <Typography variant="h6" color="primary">
                                Contact
                            </Typography>
                        </Toolbar>
                        <List component="nav">
                            <a className="button-link" href="/contact">
                                <ListItem button>
                                    <ListItemText primary="Contact Me"/>
                                </ListItem>
                            </a>

                        </List>
                    </AppBar>
                </Paper>
            </div>
        );
    }
}




