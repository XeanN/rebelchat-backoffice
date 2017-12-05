{/* A input that sends new messages to a conversation. */}
import React, {Component} from 'react';
import { connect } from "react-redux";
import {database} from '../../lib/firebase';
import firebase from 'firebase';

class messageInput extends Component {
    constructor (props) {
        super(props);
        this.state = { input: '' };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    handleKeyPress(event) {
        const message = event.target.value; 
        if (event.charCode == 13) {
            event.preventDefault();
            event.stopPropagation();
            if ( message.length ) {
                event.target.value = "";
                this.sendMessage(message,this.props.selectedClient.key);
            }
        } else {
            if ( message.length > 40 ){
                event.target.value = message.slice(0, -1);
            }
        }
    }
    handleChange(event) {
        this.setState({input: event.target.value});
    }
    handleClick() {
        const message = this.state.input;
        this.setState({input: ''});
        this.sendMessage(message,this.props.selectedClient.key);
    }
    sendMessage(message,id) {
        if(id && message.length){
            var path = '/messages/' + id + '/';
            var newMessage = {
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                message: message,
                read: false,
                source: 'SERVER'
            };
            database.ref().child(path).push(newMessage);    
        }
    }
    render () {
        return (
        <div className="rebelchat-row">
            <div className="rebelchat-group">
                <input value={this.state.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className="rebelchat rebelchat-material" type="text" placeholder="Enter your message" id="1511979594548-message-zone" />
                <span className="rebelchat-highlight"></span>
                <span className="rebelchat-bar"></span>
            </div>
            <a onClick={this.handleClick} className="rebelchat-send-button">
                <div className="circle active" alt="Send" title="Send">
                    <span className="burger triangle"></span>
                </div>
            </a>
        </div>
        );
    }
}

const mapStateToProps = state => ({
	selectedClient: state.client.selected
});

export default connect(mapStateToProps)(messageInput);