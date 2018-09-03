import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { node, bool, string } from 'prop-types';

const Container = styled(Flex)`
    min-height: 100vh;
    background-color: ${props => props.backgroundColor || 'white'};
`;

class Layout extends React.PureComponent {
  static propTypes = {
      children: node.isRequired,
      navbar: bool,
      backgroundColor: string,
  };

  static defaultProps = {
      navbar: false,
      backgroundColor: undefined,
  };

  render () {
      const { children, navbar, backgroundColor } = this.props;
      return (
          <Container backgroundColor={backgroundColor} flexDirection="column" justifyContent="space-between" alignItems="center">
              {navbar && <Navbar />}
              {children}
              <Footer />
          </Container>
      );
  }
}

export default Layout;
