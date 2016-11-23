import React from 'react';
import { Link } from 'react-router'


import './styles.scss'

const Base = React.createClass({

    handler() {
        console.log(this.props.children.props.to)
    },
    render: function() {
        return (
            <Link {...this.props} className='div-base' activeClassName='active' >
                <img className='article-image' src={`./public/img/${this.props.to}.jpg`} />
                <div className='caption'>
                    <h3 className='base-name'>{this.props.to}</h3>
                </div>
            </Link>
        );
    }
});

export default Base;