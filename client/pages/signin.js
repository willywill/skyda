import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import SignUp from '../components/composite/SignUp';
import SignIn from '../components/composite/SignIn';
import fetch from '../utils/fetch';
import Error from '../components/Error';

class SignInPage extends React.PureComponent {
    state = { showSignUp: false, error: '' };

    handleSignIn = async (data) => {
        try {
            const res = await fetch.post('http://localhost:3002/api/v1/auth/signin', data);
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
            this.setState({ error: error.response.data.error });
        }
    }

    handleSignUp = async () => {
        console.log('Sign Up Clicked');
    }

    handleNoAccountClick = () => {
        this.setState({ showSignUp: true, error: '' });
    }

    handleExistingAccountClick = () => {
        this.setState({ showSignUp: false, error: '' });
    }

    render () {
        const { showSignUp, error } = this.state;
        return (
            <Layout navbar>
                <Card>
                    {showSignUp
                        ? <SignUp
                            onSignUp={this.handleSignUp}
                            onClickExistingAccount={this.handleExistingAccountClick}
                        />
                        : <SignIn
                            onSignIn={this.handleSignIn}
                            onClickNoAccount={this.handleNoAccountClick}
                        />
                    }
                    {error && <Error error={error} />}
                </Card>
            </Layout>
        );
    }
}

export default SignInPage;
