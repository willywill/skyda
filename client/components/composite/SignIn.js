import React from 'react';
import { func } from 'prop-types';
import A from '../A';
import TextField from '../../components/TextField';
import { Subtitle, Button } from 'bloomer';
import { Flex, Box } from 'grid-styled';

class SignIn extends React.PureComponent {
    state = { email: '', password: '' };

    static propTypes = {
        onSignIn: func.isRequired,
        onClickNoAccount: func.isRequired,
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render () {
        const { onSignIn, onClickNoAccount } = this.props;
        return (
            <React.Fragment>
                <Subtitle hasTextAlign="centered" isSize={3}>Sign In</Subtitle>
                <TextField
                    name="email"
                    label="Email"
                    value={this.state.email}
                    placeholder="Enter a valid email address"
                    onChange={this.handleChange}
                />
                <TextField
                    name="password"
                    type="password"
                    label="Password"
                    value={this.state.password}
                    placeholder="Must be at least 8 characters"
                    onChange={this.handleChange}
                />
                <Flex flexDirection="column" alignItems="center">
                    <Button onClick={() => onSignIn(this.state)} style={{ width: '100%', margin: '10px 0px' }} isColor="primary">Sign In</Button>
                    <Box>
                        <A onClick={onClickNoAccount}>Don't have an account yet?</A>
                    </Box>
                </Flex>
            </React.Fragment>
        );
    }
}

export default SignIn;
