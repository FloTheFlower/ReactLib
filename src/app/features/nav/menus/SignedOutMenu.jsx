import React from 'react'
import { Menu, Button } from 'semantic-ui-react'


export const SignedOutMenu = ({signin}) => {
    return (
        <Menu.Item position="right">
        <Button onClick={signin} basic inverted content="Login" />
        <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
      </Menu.Item>
    )
}

export default SignedOutMenu;