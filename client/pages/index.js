import React from 'react';
import { Flex, Box } from 'grid-styled';
import { Hero, Subtitle, Button } from 'bloomer';
import Layout from '../components/Layout';

class Home extends React.PureComponent {
    render () {
        return (
            <Layout navbar>
                <Hero isFullHeight isColor="info">
                    <Flex style={{ height: '100vh' }} justifyContent="center" alignItems="center">
                        <Subtitle isSize={2}>
                            <Flex flexDirection="column">
                                <Box mb={4}>
                                    Welcome to Skyda™
                                </Box>
                                <Button isColor="primary">
                                    Sign In
                                </Button>
                            </Flex>
                        </Subtitle>
                    </Flex>
                </Hero>
            </Layout>
        );
    }
}

export default Home;
