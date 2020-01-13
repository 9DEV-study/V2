import React from "react";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1" style={{color: "white"}}>스터디 9DEV에<br/>오신 것을 환영합니다.</h1>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Find Out More
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
