import React from "react";
import { images } from "../../constants";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
