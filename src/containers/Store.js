import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

export class Store extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <section>
                    <div className='container'>
                        <h1>
                            🛒 Store
                           </h1>
                        <hr />

                        <div className='store-list'>
                            <div className='store-list-item'>
                                <img src={ require('../images/t-shirt01.jpg') } />
                                <p><b>เสื้อยืดลายชาบลูส์</b></p>
                                <p>รายละเอียด : เสื้อยืดลายชาบลูส์ รุ่นแรกสีขาวดำมีสีเดียว สั่งซื้อได้ทางเพจของ Macrowave</p>
                                <p>ขนาด : S, M, L, XL, 2XL</p>
                                <p>ราคา : 300 บาท</p>
                                <a href='https://www.facebook.com/macrowave.th/' className='btn'>สั่งซื้อ</a>
                            </div>
                            <div className='store-list-item'>
                                <img src={ require('../images/monk01.JPG') } />
                                <p><b>พระเครื่องคุณฉิม charblues</b></p>
                                <p>รายละเอียด : หลวงปู่ทวดรุ่นเรียนดี (แจกปีนัง) ภาพจากเน็ต ของแท้นัดดูได้ ถูกใจให้ฟรี เนื้อนวะ กะไหล่ทอง</p>
                                <p>ราคา : ถามเจ้าของโพสต์</p>
                                <a href='#' className='btn disable'>ถามเจ้าของโพสต์</a>
                            </div>
                            <div className='store-list-item'>
                                <img src={ require('../images/500.png') } />
                                <p><b>แผ่นซีดีอัลบั้มแรก charblues</b></p>
                                <p>รายละเอียด : แผ่นซีดีอัลบั้มแรก charblues ยังไม่ทำ</p>
                                <p>ราคา : ฿฿฿ บาท</p>
                                <a href='#' className='btn disable'>ยังไม่ทำ</a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Store
