import React, { Component } from 'react'

import _ from 'lodash';
import firebase from 'firebase'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: []
        };
        let app = firebase.database().ref('greeting')
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        })
    }

    getData(values) {
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();
        this.setState({
            messages: messages
        });
    }

    render() {

        let messageNodes = this.state.messages.reverse().map((message, i) => {
            return (
                <div key={i} className='greeting-msg-item'>
                    🤵🏾 <span className='item-name'>{ message.name }</span> : <span className='item-msg'>{ message.message }</span>
                    <br />
                    <i className='item-time'>{ message.date }</i>
                </div>
            )
        });

        return (
            <div>
                {messageNodes}
            </div>
        )
    }

}

export default Home

