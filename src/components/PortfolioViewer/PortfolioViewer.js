import React, { Component } from 'react';
import "./PortfolioViewer.css";
import {portfolio_items} from "../../portfolio_items/portfolio_items";
import {ImageScroller} from "../ImageScroller/ImageScroller";

export class PortfolioViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: null
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;

        if (id) {
            var item = null;

            for (var i = 0; i < portfolio_items.length;i++) {
                if (id == portfolio_items[i].id) {
                    item = portfolio_items[i];
                }
            }

            if (item) {
                this.setState({item:item});
            }
        }
    }

    render() {
        return (
            <div id="PortfolioViewer">
                {this.state.item &&
                    <h3>{this.state.item.title}</h3>

                }
                {this.state.item &&
                    <ImageScroller images={this.state.item.images}/>
                }
            </div>
        );
    }
}


