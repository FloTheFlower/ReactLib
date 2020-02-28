import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Textinput from '../../../common/form/Textinput'; 
import {login} from '../authActions'
import { connect } from 'react-redux';

const actions = {
  login
}


const LoginForm = ({login, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}  autoComplete='off '>
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
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions) (reduxForm({form: 'loginForm'}) (LoginForm));