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
              🎵 Song
                           </h1>
            <hr />
            <div className='song-list'>

              <iframe className='itune-player' allow="autoplay *; encrypted-media *;" frameborder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/th/album/%E0%B8%8A-%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%81%E0%B9%86-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B2-single/1442073321?app=music"></iframe>
              <iframe className='itune-player' allow="autoplay *; encrypted-media *;" frameborder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/th/album/%E0%B8%AD%E0%B8%A2-%E0%B8%B2%E0%B8%84-%E0%B8%A2%E0%B9%80%E0%B8%A3-%E0%B8%AD%E0%B8%87%E0%B8%9A-%E0%B8%99%E0%B8%AA-%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%9D-%E0%B8%87%E0%B9%84%E0%B8%81-single/1442069590?app=music"></iframe>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Song
