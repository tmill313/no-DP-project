import React, { Component } from 'react';
import axios from 'axios';
import './Create.css';
import Delete from './Delete';
import Update from './Update';
import Favorite from './Favorite';
import cors from 'cors';
import Downvote from './Downvote';


export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            text: '',
            time: new Date().toLocaleString(),
            fav: 0,
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.createMessage=this.createMessage.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
        this.favorite=this.favorite.bind(this);
        this.downVote=this.downVote.bind(this);
    }
   
    componentDidMount() {
        axios.get('api/messages').then(res => {
            this.setState({
                messages: res.data
            })
        })
    }

    favorite(id) {
        const {text, time, fav} = this.state.messages.find((i) => i.id === id);
        console.log(text, time, fav);
         axios.put(`api/messages/fav/${id}`, {id, text, time, fav}).then(res => {
            console.log(res.data)
            this.setState({
                messages: res.data
            })
            console.log(res.data)
        })
    }

    downVote(id) {
        const {text, time, fav} = this.state.messages.find((i) => i.id === id);
        console.log(text, time, fav);
         axios.put(`api/messages/down/${id}`, {id, text, time, fav}).then(res => {
            console.log(res.data)
            this.setState({
                messages: res.data
            })
            console.log(res.data)
        })
    }

    update(id) {
        const {text, time, fav} = this.state;
        axios.put(`/api/messages/${id}`, {id, text, time, fav}).then(res => {
            this.setState({
                messages: res.data
            })
            console.log(res.data)
            
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
        axios.post('/api/messages', { text, time, fav}).then( res => {
    this.setState({messages: res.data})})
    }

    render() {
       let mess = this.state.messages.sort((a, b) => b.fav - a.fav).map(obj => {
           return (
               <div className="message-box">
                    <div className="text-time-div">
                    <h3 className="time-p">{obj.time}</h3>
                    <p className="text-p">{obj.text}</p>
                   </div>
                    <div className="buttons-div">
                   <div className="fav-button-div">
                    <Favorite favorite={this.favorite} fav={obj.fav} id={obj.id}/>
                   </div>
                   <p className="fav-p">{obj.fav}</p>
                   <div className="downvote-div">
                    <Downvote downVote={this.downVote} fav={obj.fav} id={obj.id}/>
                   </div>
                   <div className="delete-div">
                   <Delete delete={this.delete} id={obj.id}/>
                   </div>
                   <div  className="updated-button-div">
                   <Update handleChange={this.handleChange} update={this.update} id={obj.id}/>
                   </div>
                   </div>
               </div>
           )
       })
        return(<div>
            <div className="message-div">{mess}</div>
            <input className="edit-input-box" placeholder={"Say what you wanna say."} onChange={e=>this.handleChange(e)}></input>
            <button className="submit-button" onClick={this.createMessage}> </button>
            </div>
        )
    }

}
