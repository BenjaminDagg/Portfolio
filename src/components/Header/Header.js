import React, { Component } from 'react';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import {ContactLinks} from "../ContactLinks/ContactLinks";

export class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="avatar">
                    <Avatar id="profile_img" alt="Ben Dagg" src={require("../../images/profile_img.webp")} />

                </div>
                <div id="header-links">
                    <ContactLinks/>
                </div>
            </div>
        );
    }
}


