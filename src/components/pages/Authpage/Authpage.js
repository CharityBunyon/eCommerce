import React from 'react';
import SignIn from '../../shared/SignIn/SignIn';
import SignUp from '../../shared/SignUp/SignUp';
import './Authpage.scss';

const Auth = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default Auth;
