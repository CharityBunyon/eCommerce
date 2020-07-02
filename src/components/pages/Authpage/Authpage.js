import React from 'react';
import SignIn from '../../shared/SignIn/SignIn';
import SignUp from '../../shared/SignUp/SignUp';
import './Authpage.scss';

class Auth extends React.Component {
  render() {
    return (
            <div className='sign-in-and-sign-up container d-flex'>
            <div className='row'>
                <div className='col'> <SignIn/></div>
                <div className='col'> <SignUp/></div>
            </div>
        </div>
    );
  }
}

export default Auth;
