import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import SignUp from '../components/composite/SignUp';
import SignIn from '../components/composite/SignIn';

class SignInPage extends React.PureComponent {
    state = { showSignUp: false };

    handleSignIn = async () => {
        console.log('Sign In Clicked');
    }

    handleSignUp = async () => {
        console.log('Sign Up Clicked');
    }

    handleNoAccountClick = () => {
        this.setState({ showSignUp: true });
    }

    handleExistingAccountClick = () => {
        this.setState({ showSignUp: false });
    }

    render () {
        const { showSignUp } = this.state;
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
                </Card>
            </Layout>
        );
    }
}

export default SignInPage;
