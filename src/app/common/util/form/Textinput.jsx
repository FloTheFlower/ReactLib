import React from 'react'
import { Form } from 'semantic-ui-react'

export const Textinput = ({
    input, width, placeholder, type, meta: {touched, error}
}) => {
    return (
      <Form.Field  error={touched && !!error}   >
            <input {...input} placeholder={placeholder} type={type} />

      </Form.Field>
    )
}
 