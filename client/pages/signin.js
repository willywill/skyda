import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import TextField from '../components/TextField';
import { Subtitle, Field, FieldBody, Button } from 'bloomer';
import { Flex, Box } from 'grid-styled';

class SignIn extends React.PureComponent {
    render () {
        return (
            <Layout navbar>
                <Card>
                    <Subtitle hasTextAlign="centered" isSize={3}>Sign Up</Subtitle>
                    <hr/>
                    <Field isGrouped isHorizontal>
                        <FieldBody>
                            <TextField label="First Name" placeholder="Your first name" />
                            <TextField label="Last Name" placeholder="Your last name" />
                        </FieldBody>
                    </Field>
                    <TextField label="Email" placeholder="Enter a valid email address" icon="envelope" />
                    <TextField label="Phone Number" placeholder="e.g. +15135555555" />
                    <TextField label="Password" placeholder="Must be at least 8 characters" />
                    <TextField label="Confirm Password" placeholder="Must be the same as password" />
                    <Flex flexDirection="column" alignItems="center">
                        <Button style={{ width: '100%', margin: '10px 0px' }} isColor="primary">Sign Up</Button>
                        <Box>
                            <a>Already have an account?</a>
                        </Box>
                    </Flex>
                </Card>
            </Layout>
        );
    }
}

export default SignIn;
