import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icons } from "@amityco/ui-kit-open-source";
const { Bars, Search } = Icons;
const BarsIcon = styled(Bars)`
  font-size: 20px;
  cursor: pointer;
  color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : "#000"};
`;

const SearchIcon = styled(Search)`
  font-size: 20px;
  cursor: pointer;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
`;
const CurrentPageText = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

const NavBar = ({ onClickBars, onClickSearch, currentPage, barIconActive }) => {
  return (
    <Nav>
      <BarsIcon active={barIconActive} onClick={onClickBars} />
      <CurrentPageText>{currentPage}</CurrentPageText>
      <SearchIcon onClick={onClickSearch} />
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
