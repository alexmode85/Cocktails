import React, { Component } from 'react'
import { Link } from 'react-router';

import './styles.scss'



export default class CockList extends Component {


    render() {
        return (
            <div className='user-list'>

                {(eval(this.context.base)).map( key =>
                    <div key={key.toString()}>
                        <Link to='/' className='cockListLink'>
                            <img className='cock-prew' src={`./public/img/${key}.jpg`} />
                            <div className='metadata'>
                                <h4 className='title'>{key}</h4> 
                            </div>
                        </Link>
                    </div>)}
                
            </div>
        );
    }
}
CockList.contextTypes = {
    base: React.PropTypes.string
}


CockList.defaultProps = {myProps: {
    Vodka: ['Bloody Mary', 'Sex on the Beach', 'Sea Breeze', 'Kamikaze', 'Black Russian'],
    Gin: ['Gin Martini', 'Gin & Tonic', 'Negroni', 'Singapore Sling', 'Gimlet'],
    Brandy: ['The Sidecar', 'Apricot Sour', 'Vieux Carre', 'Metropolitan', 'B&B'],
    Rum: ['Daiquiri', 'Hurricane', 'Pina Colada', 'Mai Tai', 'The Painkiller'],
    Tequila: ['Margarita', 'Tequila Sunrise', 'Paloma', 'Juan Collins', 'El Diablo']
}}


