import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            conpassword:''
        }
        this.user = null;
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
    }

    update(e) {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    submit(e) {
        e.preventDefault();
        const { email, password, conpassword } = this.state;
        console.log(email, password, conpassword);
        
        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then((res) => {
            console.log(auth.currentUser);
            this.props.setUser(auth.currentUser);
        }).catch((err) => {
            console.log(err);
        })


        

    }

    render() {
        return (
            <div className="login">

                <form className="form" onSubmit={this.submit}>
                    <div className="form-sub">
                        <div className="form-container names">
                            <label htmlFor="email">Email</label>
                            <label htmlFor="password">Password</label>
                            <label htmlFor="con-password">Conform Password</label>
                        </div>

                        <div className="form-container inputs">
                            <input id="email" onChange={this.update} type="email" placeholder="email@exp.com" />
                            <input id="password" onChange={this.update} type="Password" />
                            <input id="conpassword" onChange={this.update} type="password" />
                        </div>
                    </div>

                    <button className="login-btn" type="submit">SIGN UP</button>
                </form>

               

            </div>
        )
    }
}
