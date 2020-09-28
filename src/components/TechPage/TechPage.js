import React, { Component } from 'react';
import "./TechPage.css";
import {TechSlider} from "../TechSlider/TechSlider";
import {tech} from "../technology/technology";
import {TechList} from "../TechList/TechList";
import 'bootstrap/dist/css/bootstrap.min.css';

export class TechPage extends Component {
    render() {

        var items = [];

        /*
        for (var i = 0; i < tech.length;i++) {
            items.push(<TechSlider name={tech[i].name} desc={tech[i].desc}/>)
        }
        */


        for (var i = 0; i < tech.length;i++) {
            items.push(
                <div className="card  col-md-3" style={{'width':'18rem','margin':'20px'}}>
                    <h5 className="card-title" style={{'margin-top': '10px'}}>{tech[i].name}</h5>
                    <div className="card-body" style={{'text-align':'left'}}>
                        <p className="card-text">{tech[i].desc}</p>
                    </div>
                </div>
            )
        }


        return (
            <div className="container" >
                <div className="row justify-content-center">
                    {items}
                </div>
            </div>
        );
    }
}


