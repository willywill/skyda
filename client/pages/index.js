import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

const Title = styled.div`
  color: red;
  font-size: 3em;
`;

class Home extends React.PureComponent {
    render () {
        return (
            <Flex my={2}>
                <Title>Welcome to Next.js!</Title>
            </Flex>
        );
    }
}

export default Home;
