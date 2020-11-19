import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';

import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user:true
        }
    }
    
    signOut = () => {
        auth.signOut();
        this.setState({user:false})
    }

    render() {
        return (
            <nav className="nav">
                <Link to="/" className="logo">&#9889;</Link>
                <ul className="nav-container">
                    <Link to="/">Home</Link>
                    {
                        auth.currentUser?<div onClick={this.signOut} className="logout">LogOut</div>:<Link to="/signup">SignUp</Link>
                    }
                    <Link to="/login"></Link>
                </ul>
                
            </nav>
        );
    }
}

export default Header;
