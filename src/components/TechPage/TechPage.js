import React, { Component } from 'react';
import "./TechPage.css";
import {TechSlider} from "../TechSlider/TechSlider";
import {tech} from "../technology/technology";
import {TechList} from "../TechList/TechList";

export class TechPage extends Component {
    render() {

        var items = [];
        for (var i = 0; i < tech.length;i++) {
            items.push(<TechSlider name={tech[i].name} desc={tech[i].desc}/>)
        }



        return (
            <div  id="TechPage" >
                <div class="list">
                    {items}
                </div>
            </div>
        );
    }
}


