import React from 'react';
import { string } from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

const ErrorContainer = styled(Flex)`
  color: red;
  background-color: rgba(255, 0, 0, 0.1);
  justify-content: center;
  padding: 1em;
  border: 1px solid red;
  border-radius: 5px;
`;

class ErrorComponent extends React.PureComponent {
    static propTypes = {
        error: string.isRequired,
    };

    render () {
        const { error } = this.props;
        return (
            <ErrorContainer my={2}>
                {error}
            </ErrorContainer>
        );
    }
}

export default ErrorComponent;
