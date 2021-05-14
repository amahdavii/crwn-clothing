import React, { Component } from 'react';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-button.component';

import './Sign-In.styles.scss';

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
     }

     handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
     }

     handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
     }

    render() { 
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" value={this.state.email} handleChange={this.handleChange} label="P assword" required />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>

            </div>     
        );
    }
}
 
export default SignIn;