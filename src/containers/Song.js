import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

export class Song extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <section>
          <div className='container'>
            <h1>
            🎵 Song Lists
                           </h1>
            <hr />
            <div className='song-list'>

              <iframe width="100%" height="300" src="https://www.youtube.com/embed/wZ_25cX0F1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/w_QZFP3SIeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/eXjek95wELw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/lQ8srB7M5Xo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Song
