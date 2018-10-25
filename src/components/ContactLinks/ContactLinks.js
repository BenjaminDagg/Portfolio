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
    }

    toggleEmail(event) {

        const { target } = event;
        this.setState({
            emailAnchor: target,
            emailOpen: !this.state.emailOpen
        });

       return target;
    }

    togglePhone(event) {
        const { target } = event;
        this.setState({
            phoneAnchor: target,
            phoneOpen: !this.state.phoneOpen
        });
    }

    render() {
       var {emailAnchor, emailOpen} = this.state;
       var id = this.state.emailOpen ? 'email-popper' : null;

        var {phoneAnchor, phoneOpen} = this.state;
        var phoneId = this.state.phoneOpen ? 'phone-popper' : null;

        return (
            <div class="contact-links">
                <img aria-describedby={id} variant="contained" onClick={this.toggleEmail} className="contact-icon" src={require("../../images/email.svg")}/>
                <Popper open={emailOpen} anchorEl={emailAnchor} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography className={styles}>bdagg@csumb.edu</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <img aria-describedby={phoneId} variant="contained" onClick={this.togglePhone} className="contact-icon" src={require("../../images/phone.svg")}/>
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
                    <img  className="contact-icon" src={require("../../images/github.svg")}/>
                </a>
                <a class="icon-link" href="https://www.linkedin.com/in/benjamin-dagg-863926168/">
                    <span className="contact-icon">in</span>
                </a>
            </div>
        );
    }
}




