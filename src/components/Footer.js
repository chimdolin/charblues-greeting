import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className='row'>
                        <div className='cols'>
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
                        </div>
                        <div className='cols'>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fmacrowave.th&tabs&width=340&height=154&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=409750529602103" width="340" height="154" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className='cols'>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchar13lues%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=409750529602103" width="340" height="154" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>

                    <div className='footer'>
                        <i>2019 charblues. All rights reserved.</i>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
