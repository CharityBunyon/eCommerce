
import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import { auth, signInWithGoogle } from '../../../helpers/data/firebase.utils';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

    handleSubmit = async (event) => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        // console.log(error);
      }
    };

    handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
    };

    render() {
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className='buttons'>
            <CustomBtn type='submit'> Sign In </CustomBtn>
            <CustomBtn type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomBtn>
            </div>
          </form>
        </div>
      );
    }
}

export default SignIn;
