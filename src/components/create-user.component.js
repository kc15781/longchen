import React, { Component } from 'react';
import axios from 'axios';
import { Modal_component } from "./shared_components/modal.component"


export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);


        this.state = {
            username: '',
            message: '',
            button_name: '',
            trigger:false
        }
 
    }

    handleClose() {
        this.setState({
            trigger: false
        })
    };


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        

        axios.post('http://localhost:5000/users/addj', user)
            .then(res => {
                console.log(res.data)
                this.setState({
                    message: res.data,
                    trigger: true
                })
                
            })
            .catch(error => {
                console.log("error")
                this.setState({
                    message: "Error, please contact the support",
                    trigger: true
                })
            });

        this.setState({
            username: ''
        })
    }


    render() {
        return (
            <div>
                
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
                <Modal_component msg={this.state.message} handleClose={this.handleClose}  trigger={this.state.trigger}/>
                
            </div>
            
        )
    }
}