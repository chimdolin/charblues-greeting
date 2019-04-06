import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';

export class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <section>
          <div className='container'>
            <div className='not-found'>
              <h1>
                Not Found 4💣4 <br />
                    </h1>
            </div>
            <hr />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default NotFound
