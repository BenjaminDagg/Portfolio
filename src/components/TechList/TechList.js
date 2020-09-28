import React, { Component } from 'react';
import "./TechList.css";

export class TechList extends Component {
    render() {
        return (
            <div class="tech-list">
               <h3>{this.props.name}</h3>
                <div class="list">
                    {this.props.items}
                </div>
            </div>
        );
    }
}


