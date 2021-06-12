/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content>
          <Header>
            <CloseButton onClick={onDismiss}>
              <VisuallyHidden>Close</VisuallyHidden>
              <Icon id="close" strokeWidth={2} />
            </CloseButton>
          </Header>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 32px;
  background: ${COLORS.white};
  width: 80%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 32px;
  padding-right: 22px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  font-family: Raleway;
  font-style: normal;
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  line-height: 21px;
  text-transform: uppercase;

  a {
    color: ${COLORS.gray[900]};
    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 32px;

  font-family: Raleway;
  font-style: normal;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  line-height: 16px;

  a {
    color: ${COLORS.gray[700]};
  }
`;

export default MobileMenu;
