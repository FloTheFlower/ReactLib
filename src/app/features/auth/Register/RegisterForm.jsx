import React from 'react';
import { connect } from 'react-redux'
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import Textinput from '../../../common/form/Textinput';
import {registerUser} from '../authActions'
import { combineValidators, isRequired } from 'revalidate';

const actions = {
  registerUser
}

const validate = combineValidators({

  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
})

const RegisterForm = ({handleSubmit, registerUser, error, invalid, submitting}) => {
  return (
    <div>
      <Form size="large" autoComplete='off' onSubmit={handleSubmit(registerUser)}>
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
           {error && <Label basic color='red'> {error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)(reduxForm({form: 'registerForm', validate})(RegisterForm));