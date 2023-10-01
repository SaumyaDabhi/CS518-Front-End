import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBox from './components/SearchBox/SearchBox'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import { Component } from 'react';
import Profile from './components/Profile/Profile';
import Password from './components/Password/Password';
import PasswordChange from './components/PasswordChange/PasswordChange';
import AuthenticationForm from './components/AuthenticationForm/AuthenticationForm';

const initialState = {
  input: '',
  route: 'signout',
  isSignedIn: false,
  user: {
    id: '',
    hash:'',
    email: '',
    name: '',
    token: ''
  }
}

class App extends Component {

  constructor(){
    super();
    this.state=initialState;
  }

  loadUser = (data) =>{
    this.setState({user: {
      id: data.id,
      hash: data.hash,
      email: data.email,
      name: data.name,
      token: data.token
    }})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState(initialState)
    } else if(route === 'update'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {

    const renderContent = () => {
      if (this.state.route === 'signin') {
        return <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
      } else if (this.state.route === 'register') {
        return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
      } else if(this.state.route === 'update') {
        return <Profile user={this.state.user}/>
      }else if(this.state.route === 'signout'){
        return  <div className="mt4"><SearchBox /></div>
      }else if(this.state.route === 'password'){
        return  <div className="mt4"><Password onRouteChange={this.onRouteChange}/></div>
      }else if(this.state.route === 'passwordchange'){
        return  <div className="mt4"><PasswordChange email={this.state.user.email} onRouteChange={this.onRouteChange}/></div>
      }else if(this.state.route === 'authentication'){
        return  <div className="mt4"><AuthenticationForm loadUser={this.loadUser} user={this.state.user} onRouteChange={this.onRouteChange}/></div>
      }
    };

    return (
      <div className="App">
        <NavBar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {/* <Admin /> */}
        {renderContent()}
      </div>
    );
}

}

export default App;
