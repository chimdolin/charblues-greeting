import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';

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
                        <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=char13lues%40gmail.com&amp;color=%231B887A&amp;ctz=Asia%2FBangkok" style={{borderWidth: 0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                            <Link to='/contactus' className='btn'>ติดต่องานแสดง</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Schedule
