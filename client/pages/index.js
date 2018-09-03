import React from 'react';
import { Flex, Box } from 'grid-styled';
import { Subtitle, Button } from 'bloomer';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';

class Home extends React.PureComponent {
    render () {
        return (
            <Layout navbar>
                <Flex justifyContent="center" alignItems="center">
                    <Subtitle isSize={2}>
                        <Flex flexDirection="column">
                            <Box mb={4} style={{ color: 'white' }}>
                                Welcome to Skyda™
                            </Box>
                            <Button isColor="primary" onClick={() => this.props.router.push('/signin')}>
                                Sign In
                            </Button>
                        </Flex>
                    </Subtitle>
                </Flex>
            </Layout>
        );
    }
}

export default withRouter(Home);
