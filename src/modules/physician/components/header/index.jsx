import React from 'react';
import { BaseHeader } from '../../../../components/base-header';
import Container from './header.container';

export { default as HeaderView } from './header.view';
export { default as HeaderContainer } from './header.container';

export const Header = () => (
  <BaseHeader>
    <Container />
  </BaseHeader>
);
