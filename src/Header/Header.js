import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <header className="header-box">
        <h1 className="header-text">find your park</h1>
        <p className="header-p">
          Find Your Park is undergoing a bit of a makeover. While I'm working on
          this, you can still search for California parks by name, narrow your
          search by what activities are offered, or locate on the map below -
          once you find what you're looking for, check out the park details. The
          signup/login/park suggestion/comments features will be back soon!
        </p>
      </header>
    </div>
  );
}
