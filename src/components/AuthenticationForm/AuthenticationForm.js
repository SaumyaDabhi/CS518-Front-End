import React, {Component} from 'react';

class AuthenticationForm extends Component {
  constructor(props){
		super(props);
		this.state ={
			authCode:''
		}
	}

  handleInputChange = (event) => {
    this.setState({authCode: event.target.value});
  };

  handleSubmit = () => {
    console.log(this.state.authCode);
   /*  event.preventDefault(); */
    // Perform authentication logic with the entered code
    // You can add your own validation and authentication logic here
    if (parseInt(this.state.authCode) !== parseInt(this.props.user.token)) {
      alert('The OTP is incorrect');
      // Perform further actions upon successful authentication
    } else {
      this.props.onRouteChange('update');
      console.log('Success');
      // Handle invalid authentication code error
    }
    /* this.state.authCode(''); */ // Clear the input field after submission
  };

  render(){
    return (
      <form className="pa4 black-80">
        <div className="measure">
          <label htmlFor="authCode" className="f6 b db mb2">
            Enter Authentication Code:
          </label>
          <input
            id="authCode"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            pattern="[0-9]*"
            maxLength="4"
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="mt4">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            value="Authenticate"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
};

export default AuthenticationForm;