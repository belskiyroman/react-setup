import React  from 'react';
import { Container } from 'semantic-ui-react';
import { BaseHeader } from '../../components/base-header/index';

const BasePage = (Component, Header) => () => (
  <Container>
    {
      Header
        ? <Header />
        : <BaseHeader />
    }
    <main className="content">
      <Component />
    </main>
  </Container>
);

export default BasePage;
