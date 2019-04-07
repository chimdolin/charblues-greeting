import React, { Component } from 'react'
import Header from '../components/Header';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <section>
                    <div className='container'>
                        <h1>
                            🎉 Greeting
                           </h1>
                        <hr />

                        <div className='greeting-box'>
                            <div className='greeting-form'>
                                <input id='greet-txt' type='text' />
                                <button className='btn'>Submit</button>
                            </div>
                            <div className='greeting-msg'>
                                🚨🚨🚨<br />-- greeting system  --<br /> coming soon!
                                    </div>
                            <div className='greeting-more'>
                                <a className='btn'> More.. </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home
