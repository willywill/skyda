import React from 'react';
import { Box } from 'grid-styled';
import { Navbar, NavbarItem, NavbarStart, NavbarEnd, NavbarBrand, NavbarMenu } from 'bloomer';

class NavbarComponent extends React.PureComponent {
  render () {
    return (
      <Navbar style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.2)', boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.04)' }}>
        <NavbarBrand>
            <NavbarItem>
              <Box mx={2}>
                Skyda™
              </Box>
            </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
            <NavbarStart>
                <NavbarItem href='#'>Home</NavbarItem>
            </NavbarStart>
            <NavbarEnd>
                <NavbarItem href="#">Sign-In</NavbarItem>
                <NavbarItem href="#">Sign-Up</NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default NavbarComponent;
