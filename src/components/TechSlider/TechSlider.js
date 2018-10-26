import React, { Component } from 'react';
import "./TechSlider.css";

export class TechSlider extends Component {
    render() {

        return (
            <div class="tech-slider" id={this.props.name}>
                <span class="tech-slider-title">{this.props.name}</span>
                <div class="slider-container">
                    <span class="beg-span">Beginner</span><span class="exp-span">Expert</span>
                    <input type="range" value={this.props.value} class="tech-input" min="1" max="100" readonly/>
                </div>
            </div>
        );
    }
}


