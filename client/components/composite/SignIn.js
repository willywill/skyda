import React from 'react';
import { func } from 'prop-types';
import A from '../A';
import TextField from '../../components/TextField';
import { Subtitle, Button } from 'bloomer';
import { Flex, Box } from 'grid-styled';

class SignIn extends React.PureComponent {
    static propTypes = {
        onSignIn: func.isRequired,
        onClickNoAccount: func.isRequired,
    };

    render () {
        const { onSignIn, onClickNoAccount } = this.props;
        return (
            <React.Fragment>
                <Subtitle hasTextAlign="centered" isSize={3}>Sign In</Subtitle>
                <TextField label="Email" placeholder="Enter a valid email address" icon="envelope" />
                <TextField type="password" label="Password" placeholder="Must be at least 8 characters" />
                <Flex flexDirection="column" alignItems="center">
                    <Button onClick={onSignIn} style={{ width: '100%', margin: '10px 0px' }} isColor="primary">Sign In</Button>
                    <Box>
                        <A onClick={onClickNoAccount}>Don't have an account yet?</A>
                    </Box>
                </Flex>
            </React.Fragment>
        );
    }
}

export default SignIn;
