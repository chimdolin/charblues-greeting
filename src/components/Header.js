import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className='brand'>
                            <Link to='/'><b>CHARBLUES</b></Link>
                        </li>
                        <li>
                            <Link to='/song'>SONG</Link>
                        </li>
                        <li>
                            <Link to='/schedule'>SCHEDULE</Link>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/macrowave.th/photos/pcb.1109874029214454/1109867559215101/?type=3&theater' target='_blank'>SHOP</a>
                        </li>
                        <li>
                            <Link to='/contactus'>CONTACT US</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
