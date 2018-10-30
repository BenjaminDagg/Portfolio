import React, { Component } from 'react';
import "./ImageScroller.css"

export class ImageScroller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images ? this.props.images : null,
            index: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        this.setState({images: this.props.images});
    }

    decrement() {
        var index = this.state.index;

        if (index == 0) {
            index = this.state.images.length - 1;
        }
        else {
            index--;
        }

        this.setState({index:index});
    }

    increment() {
        var index = this.state.index;

        index = (index + 1) % this.state.images.length;

        this.setState({index:index});
    }

    render() {
        return (
            <div class="image-scroller">
                <img class="scrollable-image" src={this.state.images[this.state.index]} />

                {this.state.images.length > 1 &&
                    <div className="left">
                        <button className="scroll-btn" id="prev-btn" onClick={this.decrement}>Prev</button>
                    </div>
                }
                {this.state.images.length > 1 &&
                 <div className="right">
                    <button className="scroll-btn" id="next-btn" onClick={this.increment}>Next</button>
                </div>
                }

            </div>
        );
    }
}


