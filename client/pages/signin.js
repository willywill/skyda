import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import TextField from '../components/TextField';

class SignIn extends React.PureComponent {
    render () {
        return (
            <Layout navbar>
                <Card>
                    <TextField label="First Name" />
                    <TextField label="Last Name" />
                </Card>
            </Layout>
        );
    }
}

export default SignIn;
