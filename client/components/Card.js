import React from 'react';
import { Box, Content } from 'bloomer';
import styled from 'styled-components';

const CardContainer = styled(Box)`
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-width: 400px;
`;

class Card extends React.PureComponent {
    render () {
        const { children } = this.props;
        return (
            <CardContainer>
                <Content>
                    {children}
                </Content>
            </CardContainer>
        );
    }
}

export default Card;
