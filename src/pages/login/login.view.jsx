import React from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';

const LoginView = ({ login, handleChange }) => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.svg" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />

            <Button
              fluid
              color="teal"
              size="large"
              onClick={login}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginView;
