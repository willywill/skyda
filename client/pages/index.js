import React from 'react';
import { Hero, HeroBody, Subtitle } from 'bloomer';
import Icon from '../components/Icon';
import Layout from '../components/Layout';

class Home extends React.PureComponent {
    render () {
        return (
            <Layout navbar>
                <Hero isFullHeight>
                    <HeroBody>
                        <Subtitle isSize={2}>
                            Title <Icon icon="check-square" />
                        </Subtitle>
                    </HeroBody>
                </Hero>
            </Layout>
        );
    }
}

export default Home;
