import React, { Component } from 'react';
import "./ContactLinks.css";
import Tooltip from '@material-ui/core/Tooltip';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    'padding' : '3px'
});

export class ContactLinks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailOpen: false,
            emailAnchor: null,
            phoneOpen:false,
            phoneAnchor: null

        };

        this.toggleEmail = this.toggleEmail.bind(this);
        this.togglePhone = this.togglePhone.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleEmail(event) {

        //if other popper is displayed then hide it
        if (!this.state.emailOpen) {
            this.setState({phoneOpen: false});
        }

        const { target } = event;
        this.setState({
            emailAnchor: target,
            emailOpen: !this.state.emailOpen,

        });



       return target;
    }

    togglePhone(event) {

        //if other popper is displayed then hide it
        if (!this.state.phoneOpen) {
            this.setState({emailOpen: false});
        }

        const { target } = event;
        this.setState({
            phoneAnchor: target,
            phoneOpen: !this.state.phoneOpen
        });
    }


    handleClick() {

        //close poppers that are still open
        if (this.state.emailOpen) {
            this.setState({emailOpen:false});
        }

        if (this.state.phoneOpen) {
            this.setState({phoneOpen:false});
        }
    }

    render() {
       var {emailAnchor, emailOpen} = this.state;
       var id = this.state.emailOpen ? 'email-popper' : null;

        var {phoneAnchor, phoneOpen} = this.state;
        var phoneId = this.state.phoneOpen ? 'phone-popper' : null;

        return (
            <div class="contact-links" onClick={this.handleClick}>
                <img title="Email Address" aria-describedby={id} variant="contained" onClick={this.toggleEmail} on className="contact-icon" src={require("../../images/email.svg")}/>
                <Popper open={emailOpen} anchorEl={emailAnchor} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography className={styles}>bdagg@csumb.edu</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <img title="Phone Number" aria-describedby={phoneId} variant="contained" onClick={this.togglePhone} className="contact-icon" src={require("../../images/phone.svg")}/>
                <Popper open={phoneOpen} anchorEl={phoneAnchor} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography className={styles}>(661)220-0748</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <a href="https://github.com/BenjaminDagg">
                    <img title="GitHub Profile"  className="contact-icon" src={require("../../images/github.svg")}/>
                </a>
                <a class="icon-link" href="https://www.linkedin.com/in/benjamin-dagg-863926168/">
                    <span title="LinkedIn Profile" className="contact-icon">in</span>
                </a>
            </div>
        );
    }
}




