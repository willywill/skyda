import React from 'react';
import { func } from 'prop-types';
import A from '../A';
import TextField from '../../components/TextField';
import { Subtitle, Field, FieldBody, Button } from 'bloomer';
import { Flex, Box } from 'grid-styled';

class SignUp extends React.PureComponent {
  static propTypes = {
      onSignUp: func.isRequired,
      onClickExistingAccount: func.isRequired,
  };

  render () {
      const { onSignUp, onClickExistingAccount } = this.props;
      return (
          <React.Fragment>
              <Subtitle hasTextAlign="centered" isSize={3}>Sign Up</Subtitle>
              <Field isGrouped isHorizontal>
                  <FieldBody>
                      <TextField label="First Name" placeholder="Your first name" />
                      <TextField label="Last Name" placeholder="Your last name" />
                  </FieldBody>
              </Field>
              <TextField label="Email" placeholder="Enter a valid email address" icon="envelope" />
              <TextField label="Phone Number" placeholder="e.g. +15135555555" />
              <TextField type="password" label="Password" placeholder="Must be at least 8 characters" />
              <TextField type="password" label="Confirm Password" placeholder="Must be the same as password" />
              <Flex flexDirection="column" alignItems="center">
                  <Button onClick={onSignUp} style={{ width: '100%', margin: '10px 0px' }} isColor="primary">Sign Up</Button>
                  <Box>
                      <A onClick={onClickExistingAccount}>Already have an account?</A>
                  </Box>
              </Flex>
          </React.Fragment>
      );
  }
}

export default SignUp;
