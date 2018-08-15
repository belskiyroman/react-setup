import React  from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Header } from '../components/header';

const container = connect(
  state => ({
    user: state.user.profile,
  }),
);

const BasePage = Component => container(({ user }) => (
  <Container>
    <Header user={user} />
    <main className="content">
      <Component user={user} />
    </main>
  </Container>
));

export default BasePage;
