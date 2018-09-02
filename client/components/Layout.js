import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Footer } from 'bloomer';
import { node, bool } from 'prop-types';

const FooterBody = styled(Footer)`
    text-align: center;
    padding: 1em;
`;

class Layout extends React.PureComponent {
  static propTypes = {
      children: node.isRequired,
      navbar: bool,
  };

  static defaultProps = {
      navbar: false,
  };

  render () {
      const { children, navbar } = this.props;
      return (
          <React.Fragment>
              {navbar && <Navbar />}
              {children}
              <FooterBody>
                  <em>Copyright 2018. All rights reserved.</em>
              </FooterBody>
          </React.Fragment>
      );
  }
}

export default Layout;
