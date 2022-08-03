import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icons } from "@amityco/ui-kit-open-source";
const { Bars, Search } = Icons;

const Nav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
`;
const CurrentPageText = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

const NavBar = ({ onClickBars, onClickSearch, currentPage, barIconActive }) => {
  return (
    <Nav>
      <div style={{ flex: 1, height: 40 }} onClick={onClickBars}>
        <Bars />
      </div>
      <CurrentPageText>{currentPage}</CurrentPageText>
      <div style={{ flex: 1, height: 40 }} onClick={onClickSearch}>
        <Search />
      </div>
    </Nav>
  );
};

NavBar.propTypes = {
  currentPage: PropTypes.string,
  barIconActive: PropTypes.bool,
  onClickBars: PropTypes.func,
  onClickSearch: PropTypes.func,
};

export { NavBar };
