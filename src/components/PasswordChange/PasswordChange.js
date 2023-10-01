import React, { Component } from "react";

class PasswordChange extends Component {
    constructor(props){
		super(props);
		this.state ={
			password:'',
            confirmpassword:''
		}
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value})
	}

    onConfirmPasswordChange = (event) =>{
		this.setState({confirmpassword: event.target.value})
	}

	onSubmitSignIn = () =>{
        if(this.state.password !== this.state.confirmpassword){alert('Password does not match')}
        else{
            fetch('http://localhost:5000/password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.props.email,
                    password: this.state.password,
                }),
                redirect: 'follow' 
            })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.onRouteChange('passwordchange');
                }
            })
        }
	}

    render() {
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				<div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f1 fw6 ph0 mh0">Change Password</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">New Password</label>
						<input 
						className="pa2 input-reset b--black bg-transparent hover-bg-black hover-white w-100" 
						type="email" 
						name="email-address"  
						id="email-address" 
						onChange={this.onPasswordChange} 
						/>
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
						<input className="b pa2 input-reset b--black bg-transparent hover-bg-black hover-white w-100" 
						type="password" 
						name="password"  
						id="password"
						onChange={this.onConfirmPasswordChange}
						/>
					</div>
					</fieldset>
					<div className="">
						<input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Update" />
					</div>
				</div>
				</main>
			</article>
        )
    }
}

export default PasswordChange;