import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <section>
                    <div className='container'>
                        <h1>
                        🤝 Contact Us
                    </h1>
                        <hr />
                        <div className='contact-list'>
                            <div className='profile'>
                                <img className='img-profile-macrowave' />
                                <p>
                                    <b>AGENCY</b> <br />
                                    🎙️ Macrowave <br />
                                    🔗 <a href='https://www.facebook.com/macrowave.th/' >fb.com/macrowave.th</a>
                                </p>
                            </div>
                            {/* <div className='profile'>
                                <img className='img-profile-themuh' />
                                <p>
                                    <b>BAND MANEAGER</b> <br />
                                    👱 Mr. T'Moo (the cLock) <br />
                                    ☎️ 086-645-8367
                    </p>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ContactUs
