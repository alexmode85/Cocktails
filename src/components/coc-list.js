import React, { Component } from 'react'
import { Link } from 'react-router';


export default class CockList extends Component {

    listItems() {
        this.props.myProps.Vodka.map((number) =>
            <li>{number}</li>
        );
    }

    render() {
        return (
            <ul className='user-list'>
                <li><Link to='/1'></Link></li>



                {(eval(this.context.base)).map( key => <li><Link to='/:base/:cocktail'> {key} </Link></li>)}

                {this.listItems}

            </ul>
        );
    }
}
CockList.contextTypes = {
    base: React.PropTypes.string
}


CockList.defaultProps = {myProps: {
    Vodka: ['Bloody Mary', 'Sex on the Beach', 'Sea Breeze', 'Kamikaze', 'Black Russian'],
    Gin: ['Gin Martini', 'Gin & Tonic', 'Negroni', 'Singapore Sling', 'Gimlet'],
    Brandy: ['The Sidecar', 'Apricot Sour', 'Brandy Daisy', 'Metropolitan', 'B&B'],
    Rum: ['Daiquiri', 'Hurricane', 'Piña Colada', 'Mai Tai', 'The Painkiller'],
    Tequila: ['Margarita', 'Tequila Sunrise', 'Paloma', 'Juan Collins', 'El Diablo']
}}


