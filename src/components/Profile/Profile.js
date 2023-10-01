import React, {Component} from "react";

class Profile extends Component {
    constructor(props){
		super(props);
		this.state ={
			name:'',
		}
	}

    /* const [name, setName] = useState('');
    const [password, setPassword] = useState(''); */

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };
/* 
    handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or API request to update user profile
        // with the updated name and password
        console.log('Updated name:', this.state.name);
        console.log('Updated password:', this.state.password);
    }; */

    onSubmitSignIn = () =>{
		fetch('http://localhost:5000/updateinfo', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.props.user.email
			}),
			redirect: 'follow' 
		})
		.then(response => response.json())
		.then(user => {
			if(user.name) {
				this.props.onRouteChange('update');
			}
		})
		
	}

    render(){
        return(
            <div className="flex justify-center">
                <form className="pa4">
                    <div className="measure">
                        <label htmlFor="name" className="f6 b db mb2">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="measure">
                        <label htmlFor="email" className="f6 b db mb2">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        value={this.props.user.email}
                        disabled
                        />
                    </div>
                    <div className="measure">
                        <input
                        type="submit"
                        value="Update"
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                        onClick={this.onSubmitSignIn}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Profile;