import React, { Component } from 'react'

import Base from '../../components/Base/index.js'
import './styles.scss'


export default class Home extends Component{
    handler() {

    }

    
    render() {
        return (
            <div className='app'>
                <header className='primary-header'></header>
                <aside className='primary-aside'>
                    <ul>
                        <li><Base to='Vodka' onClick={this.handler} /></li>
                        <li><Base to='Gin' onClick={this.handler} /></li>
                        <li><Base to='Brandy' onClick={this.handler} /></li>
                        <li><Base to='Rum' onClick={this.handler} /></li>
                        <li><Base to='Tequila' onClick={this.handler} /></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}


