import React, { Component } from 'react';
import "./PortfolioViewer.css";
import {portfolio_items} from "../../portfolio_items/portfolio_items";
import {ImageScroller} from "../ImageScroller/ImageScroller";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'

export class PortfolioViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: null
        };

        this.renderCarouselItems = this.renderCarouselItems.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
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


    renderCarouselItems() {
        if (!this.state.item) {
            return;
        }
        else {
            console.log('in');
            var item = this.state.item;
            var carouselSlides = [];
            console.log(item);
            for (var i = 0; i < item.images.length;i++) {

                if (i  == 0) {
                    carouselSlides.push(

                        <div className="carousel-item active">
                            <img className="d-block w-100"
                                 src={item.images[i]} />
                        </div>
                    )
                }
                else {
                    carouselSlides.push(

                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src={item.images[i]} />
                        </div>
                    )
                }

            }
            console.log(carouselSlides);
            return carouselSlides;
        }
    }

    nextSlide() {
        //$('#carouselExampleControls').carousel('next');
    }

    prevSlide() {
        //$('#carouselExampleControls').carousel('prev');
    }

    render() {

        var carouselItems = this.renderCarouselItems();


        return (
            <div className="container">
                {this.state.item &&
                    <h3>{this.state.item.title}</h3>

                }
                {this.state.item &&
                <div id="port-content">
                    <p className="item-desc">{this.state.item.desc}</p>
                    <br />
                    {this.state.item.github &&
                        <a className="item-link" href={this.state.item.github}>GitHub Page</a>
                    }
                    <br />
                    {this.state.item.url &&
                        <a className="item-link" href={this.state.item.url}>Link to Site</a>
                    }
                </div>
                }
                <div className="row justify-content-center">
                    {this.state.item &&
                    <ImageScroller images={this.state.item.images}/>
                    }
                </div>
            </div>
        );



    }
}


