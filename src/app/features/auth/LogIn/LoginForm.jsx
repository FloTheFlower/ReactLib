import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Textinput from '../../../common/form/Textinput'; 


const LoginForm = () => {
  return (
    <Form error size="large">
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

export default reduxForm({form: 'loginForm'}) (LoginForm);