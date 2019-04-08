import React, { Component } from 'react'
import Header from '../components/Header';
import Slide from '../components/Slide';
import Footer from '../components/Footer';
import GreetingList from '../components/GreetingList'

import trim from 'trim';
import firebase from 'firebase'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.checkName = this.checkName.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeMsg = this.onChangeMsg.bind(this)
        this.onKeyup = this.onKeyup.bind(this)
        this.state = {
            message: '',
            name: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeMsg(e) {
        this.setState({
            message: e.target.value
        });
    }

    checkName(e) {
        if (this.state.name == '') {
            this.setState({
                name: 'anonymous'
            })
        }
    }

    onKeyup(e) {
        this.checkName(e)
        let date = new Date().toString();
        console.log()
        if (e.keyCode === 13 && trim(e.target.value) !== '') {
            e.preventDefault();
            let dbCon = firebase.database().ref('/greeting');
            dbCon.push({
                message: trim(e.target.value),
                name: this.state.name ? this.state.name : 'anonymous',
                date: date
            });
            this.setState({
                message: '',
                name: ''
            });
        }
    }

    render() {

        return (
            <div>
                <Header />
                <Slide />
                <section>

                    <div className='container'>
                <span className='bell'>🔔🔔</span><marquee className='welcome-marquee' behavior="scroll" direction="left" scrollamount="10">ยินดีต้อนรับเข้าสู่ web page ของชาบลูส์ วงดนตรีนะครับไม่ใช่หมูจุ่ม อยากฟังพวกเราติดต่อคุณ ทิชา <a href='https://www.facebook.com/macrowave.th/' > fb.com/macrowave.th </a>ได้เลยครับ</marquee>
                        <h1>
                            🎉 Greeting 
                           </h1>
                        <hr />

                        <div className='greeting-box'>
                            <div className='greeting-form'>
                                <form>
                                    🤵🏾 <input className="greeting-name" onChange={this.onChangeName} value={this.state.name} placeholder="what you're name?" />
                                    <textarea
                                        className="textarea"
                                        placeholder="🎤 type a message.."
                                        rows="5"
                                        onChange={this.onChangeMsg}
                                        onKeyUp={this.onKeyup}
                                        value={this.state.message}>
                                    </textarea>
                                </form>
                                {/* <input id='greet-txt' type='text' />
                                    <button className='btn'>Submit</button> */}
                            </div>
                            <div className='greeting-msg'>
                                <GreetingList />
                            </div>

                            {/* <div className='greeting-more'>
                                <a className='btn'> More.. </a>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

}

export default Home
