import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

export class Schedule extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <section>
                    <div className='container'>
                        <h1>
                            📅 Schedule
                           </h1>
                        <hr />

                        <div className='schedule-list'>
                            <p>--- no event ---</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Schedule
