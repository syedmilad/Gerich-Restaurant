import React from "react";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";

const app_wrapper = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100vh",

  padding: "4rem 6rem",
};

const app__wrapper__info = {
  flex: "1",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  border: "1px solid black",
};
const app__wrapper__img = {
  flex: "1",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  marginLeft: "2rem",
  // border: "1px solid white",
};
const Header = () => (
  <div className="app__header" style={app_wrapper} id="home">
    <div style={app__wrapper__info}>
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}} >
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button"  >Explore Menu</button>
    </div>
    <div style={app__wrapper__img}>
      <img style={{width: "100%", height:"100%"}} src={images.welcome} alt="welcome Image" />
    </div>
  </div>
);

export default Header;
