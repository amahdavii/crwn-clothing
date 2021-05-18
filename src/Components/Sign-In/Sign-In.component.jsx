import React, { Component } from 'react';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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

                    <div className="buttons">
                      <CustomButton type="submit">Sign In</CustomButton>
                      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>

            </div>     
        );
    }
}
 
export default SignIn;