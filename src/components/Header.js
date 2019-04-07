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
                        <Link to='/store'>STORE</Link>
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
