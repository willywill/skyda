import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
const Title = styled.div`
  color: red;
  font-size: 3em;
`;

class Home extends React.PureComponent {
    render () {
        return (
            <Title>Welcome to Next.js!</Title>
        );
    }
}

export default Home;
