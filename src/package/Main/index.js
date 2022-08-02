import React from "react";
import styled from "styled-components";

import { customizableComponent } from "@amityco/ui-kit-open-source";

const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-areas: "side main" "none main";
  grid-template-columns: min-content auto;
  grid-template-rows: 100%;
  width: 100%;
  height: 100%;
  background: #f7f7f8;
`;

const Main = styled.div`
  grid-area: main;
  overflow: auto;
  width: 100%;
  min-width: 20rem;
  padding-bottom: ${({ theme }) => theme.paddingBottom};
  margin: 0 auto;
`;

const Side = styled.div`
  grid-area: side;
  overflow: auto;
`;

const Header = styled.div`
  background: #fff;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  max-height: 100%;
  width: 100%;
  /* hidden scroll */
  overflow: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const Layout = ({ aside, header, children }) => {
  return (
    <LayoutContainer>
      <Header>{header}</Header>
      <Container>
        <Main id="main">{children}</Main>
        <Side>{aside}</Side>
      </Container>
    </LayoutContainer>
  );
};

export default customizableComponent("Layout", Layout);
