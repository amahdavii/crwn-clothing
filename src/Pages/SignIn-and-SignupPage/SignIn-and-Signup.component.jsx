import React from 'react';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';

import './SignIn-and-Signup.styles.scss';

const SigInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);
 
export default SigInAndSignUp;