import React, { Component } from 'react';
import "./PortfolioItem.css";
import Chip from '@material-ui/core/Chip';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    chip: {
        margin: '5px'
    }
};

export class PortfolioItem extends Component {

    constructor(props) {
        super(props);

        this.createChips = this.createChips.bind(this);
    }

    createChips() {

        var chipList = [];

        for (var i = 0; i < this.props.chips.length;i++) {
            chipList.push(<Chip style={styles.chip} label={this.props.chips[i]}/>)
        }

        return chipList;
    }

    render() {
        var chips = this.createChips();

        /*
        return (
            <div id={this.props.name} class="portfolio-item col-12 col-md-6">
                <a href={this.props.link}>
                <h3 className="portf-title">{this.props.name}</h3>
                <div class="item-info">
                    <img className="item-img" src={this.props.imgUrl}/>

                    <p className="description">
                        {this.props.description}
                    </p>
                </div>
                <div class="chip-container">
                    {chips}
                </div>
                </a>
            </div>
        );
        */
        return (
            <div id={this.props.name} className="portfolio-item col-12 col-md-6">
                <a href={this.props.link}>
                <div className="row">
                    <div className="col-12">
                        <h3 className="portf-title">{this.props.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="item-img" src={this.props.imgUrl}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="description">
                            {this.props.description}
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        {chips}
                    </div>
                </div>
                </a>
            </div>
        )
    }
}


