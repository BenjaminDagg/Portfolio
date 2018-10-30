import React, { Component } from 'react';
import "./TechSlider.css";

export class TechSlider extends Component {
    render() {

        return (
            <div class="tech-slider" id={this.props.name}>
                <div class="name-container">
                    <h3 className="tech-slider-header">{this.props.name}</h3>
                </div>
                <div class="desc-container">
                    <p>{this.props.desc}</p>
                </div>

            </div>
        );
    }
}


