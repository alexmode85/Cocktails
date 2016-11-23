import React from 'react';

const Cocktail = React.createClass({
    render: function() {
        return (
            <div>
                <h1>This is your cocktail {this.props.params.cocktail}</h1>

            </div>
        );
    }
});

export default Cocktail;
