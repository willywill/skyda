import React from 'react';
import { Hero, HeroBody, Subtitle, Footer } from 'bloomer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Icon from '../components/Icon';

const FooterBody = styled(Footer)`
    text-align: center;
    padding: 1em;
`;

class Home extends React.PureComponent {
    render () {
        return (
            <React.Fragment>
                <Navbar />
                <Hero isFullHeight>
                    <HeroBody>
                        <Subtitle isSize={2}>
                            Title <Icon icon="check-square" />
                        </Subtitle>
                    </HeroBody>
                </Hero>
                <FooterBody>
                    <em>Copyright 2018. All rights reserved.</em>
                </FooterBody>
            </React.Fragment>
        );
    }
}

export default Home;
