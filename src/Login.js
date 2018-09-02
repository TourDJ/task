import React, { Component } from 'react';

// login greeting
function UserGreeting(props) {
    return <h1>Welcome back!</h1> 
}

// unlogin greeting
function GuestGreeting(props) {
    return <h1>Please sign up.</h1> 
}

// greeting logic
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }        
    return <GuestGreeting />;
}

// login button
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
};

// unlogin button
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
};

// login class
class Login extends Component {
  
  constructor(props) {
    super(props);
          this.handleLoginClick = this.handleLoginClick.bind(this);
          this.handleLogoutClick = this.handleLogoutClick.bind(this);
          this.state = {isLoggedIn: true};
  }



  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
          );
    };
}


export default Login; 
