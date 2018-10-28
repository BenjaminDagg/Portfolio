import React, { Component } from 'react';
import "./PortfolioWeb.css";
import {PortfolioItem} from "../PortfolioItem/PortfolioItem";
import {portfolio_items} from "../../portfolio_items/portfolio_items";

export class PortfolioWeb extends Component {

    constructor(props) {
        super(props);

        this.createList = this.createList.bind(this);
    }

    createList() {
        var list = [];

        for (var i = 0; i < portfolio_items.length;i++) {
            list.push(
                <PortfolioItem name={portfolio_items[i].title}
                               imgUrl={portfolio_items[i].img}
                               description={portfolio_items[i].desc}
                               chips={portfolio_items[i].chips}
                               link={portfolio_items[i].link}
                />)
        }

        return list;
    }

    render() {

        var items = this.createList();

        return (
            <div id="PortfolioWeb">
                {items}
            </div>
        );
    }
}


