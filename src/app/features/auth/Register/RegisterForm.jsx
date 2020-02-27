import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Textinput from '../../../common/form/Textinput';

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={Textinput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={Textinput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={Textinput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({form: 'registerForm'})(RegisterForm);