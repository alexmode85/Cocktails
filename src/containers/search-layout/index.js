import React, { Component } from 'react';

import './styles.scss'



export default class SearchLayout extends Component{

    getChildContext() {
        return {base:   `this.props.myProps.${this.props.params.base}`  };
    }


    render() {
        return (
            <div className='search'>
                <header className='search-header'>
                    <h1>Top 5 cocktails width {this.props.params.base} for you</h1>
                </header>
                <div className='search-results'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SearchLayout.childContextTypes = {
    base: React.PropTypes.string
};
