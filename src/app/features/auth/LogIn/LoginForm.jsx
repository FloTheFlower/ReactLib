import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Textinput from '../../../common/form/Textinput'; 
import {login, socialLogin} from '../authActions'
import { connect } from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin'

const actions = {
  login, 
  socialLogin
}


const LoginForm = ({login, handleSubmit, error, socialLogin}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)}  autoComplete='off '>
      <Segment>
        <Field
          name="email"
          component={Textinput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={Textinput}
          type="password"
          placeholder="password"
        />

  {error && <Label basic color='red'> {error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
       < Divider horizontal> 
       Or
       </Divider>
       < SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions) (reduxForm({form: 'loginForm'}) (LoginForm));