import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { node, bool } from 'prop-types';

const Container = styled(Flex)`
    min-height: 100vh;
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
          <Container flexDirection="column" justifyContent="space-between" alignItems="center">
              {navbar && <Navbar />}
              {children}
              <Footer />
          </Container>
      );
  }
}

export default Layout;
