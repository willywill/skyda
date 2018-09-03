import React from 'react';
import styled from 'styled-components';
import { Footer as StyledFooter } from 'bloomer';

const FooterBody = styled(StyledFooter)`
  width: 100%;
  text-align: center;
  padding: 1em;
`;

class Footer extends React.PureComponent {
    render () {
        return (
            <FooterBody>
                <em>© Copyright 2018. All rights reserved.</em>
            </FooterBody>
        );
    }
}

export default Footer;
