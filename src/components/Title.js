import React, { Component } from 'react';

class Title extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.id);
    };

    render() {
        return (
            <div 
                className="item"
                onClick={this.handleClick}
            >
                {this.props.value}
            </div>
        );
    }
}

export default Title;