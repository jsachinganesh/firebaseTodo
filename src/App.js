
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./Firebase/Firebase";

class App extends Component {
  // const [user, setUser] = useState(null);
  constructor(props) {
    super(props);
    this.state = {
      user:''
    }
    this.setUser = this.setUser.bind(this);
  }

  setUser(value) {
    this.setState({user:value})
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={user} setUser={this.setUser}/>
          <Switch>
            <Route exact path="/signup" component={()=> <Login setUser={this.setUser}/>} />
  
            <Route path="/" >
              <h1>HELO WORLD</h1>
            </Route>
  
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
