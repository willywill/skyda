import React, { PureComponent } from 'react';
import { Flex, Box } from 'reflexbox';
import { Button } from 'react-bulma-components/full';
import styled from 'styled-components';

const Body = styled(Flex)`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(43, 148, 229, 0.25) 100%);
`;

const Card = styled(Flex)`
    overflow: hidden;
    border-radius: 5px;
    height: 80vh;
    width: 30vw;
    background-color: white;
    box-shadow: 0px 7px 35px 0px rgba(140, 140, 140, 0.2);
`;

// hls(212, 81, 89)
const CardHeader = styled(Box)`
    width: 100%;
    background: linear-gradient(
        to left,
        hsl(212, 76%, 53%) 0%,
        hsl(212, 76%, 53%) 20%,
        hsl(212, 66%, 53%) 20%,
        hsl(212, 66%, 63%) 40%,
        hsl(212, 56%, 63%) 40%,
        hsl(212, 56%, 73%) 60%,
        hsl(212, 46%, 73%) 60%,
        hsl(212, 46%, 83%) 80%,
        hsl(212, 36%, 83%) 80%,
        hsl(212, 36%, 93%) 100%,
        hsl(212, 26%, 93%) 100%
    );
    background-color: rgb(43, 148, 229);
    height: 6px;
`;

class App extends PureComponent {
    render() {
        return (
            <Body align="center" justify="center">
                <Card column justify="flex-start">
                    <CardHeader />
                    <Button>Sign In</Button>
                    <Button color="link">Sign Up</Button>
                </Card>
            </Body>
        );
    }
}

export default App;
