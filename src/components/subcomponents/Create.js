import React, { Component } from 'react';
import axios from 'axios';
import './Create.css';
import Delete from './Delete';
import Update from './Update';


export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            text: '',
            time: 0,
            fav: 0
        }
        this.handleChange=this.handleChange.bind(this);
        this.createMessage=this.createMessage.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
    }
   
    componentDidMount() {
        axios.get('api/messages').then(res => {
            this.setState({
                messages: res.data
            })
        })
    }

    update(id) {
        this.setState({
            time: new Date ()
        })
        const {text, time, fav} = this.state;
        axios.put(`/api/messages/${id}`, {id, text, time, fav}).then(res => {
            this.setState({
                messages: res.data
            })
            
        })
    }

    delete(id) {
        console.log(id)
    axios.delete(`/api/messages/${id}`).then(res => {
        console.log(res.data)
        this.setState({
            messages: res.data
        })
    })
}


    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    createMessage(e) {
        this.setState({
            time: new Date()
        })
        const {text, time, fav} = this.state;
        axios.post('/api/messages', {text, time, fav}).then( res => {
    this.setState({messages: res.data})})
    }

    render() {
       let mess = this.state.messages.map(obj => {
           return (
               <div className="message-box">
                   <p>{obj.text}</p>
                   <p>{obj.time}</p>
                   <p>{obj.fav}</p>
                   <div>
                   <Delete delete={this.delete} id={obj.id}/>
                   </div>
                   <div>
                   <Update handleChange={this.handleChange} update={this.update} id={obj.id}/>
                   </div>
               </div>
           )
       })
        return(<div>
            <div className="message-div">{mess}</div>
            <input className="input-box" placeholder={"Say what you wanna say."} onChange={e=>this.handleChange(e)}></input>
            <button className="submit-button" onClick={this.createMessage}> YO - DUH </button>
            </div>
        )
    }

}
