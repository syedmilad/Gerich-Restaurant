import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits Your Taste" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu" >

        <div className="app__specialMenu-menu_wise flex__center">
            <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            <div className="app__specialMenu-menu_items" >
                {data?.wines?.map((wine,index)=>(
                  <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} /> 
                ))}
            </div>
        </div>

        <div className="app__specialMenu-menu_img" >
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
            <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            <div className="app__specialMenu-menu_items" >
                {data?.cocktails?.map((cocktail,index)=>(
                  <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                ))}
            </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_items" >
        <button className="custom__button" >show more</button>
      </div>
    </div>
  );
};

export default SpecialMenu;