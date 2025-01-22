import React from 'react';

import './Header.css';
import SubHeading from "../../components/SubHeading/SubHeading"

const buttonStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100vh",

  padding: "4rem 6rem"
};

const app__wrapper__info = {
  flex: "1",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  border: "1px solid black"

}
const app__wrapper__img = {
  flex: "1",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "2rem",
  border: "1px solid black"
}    
const Header = () => (
  <div className="app__header" style={buttonStyle} id="home">
    <div style={app__wrapper__info}>
      <SubHeading/>
    </div>
    <div style={app__wrapper__img}>asfsda</div>
  </div>
);

export default Header;
