import './header.css';
import React from "react";
import { useNavigate }  from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={"header"}>
      <div className={"header-wrapper"}>
        <div className={"home"} onClick={ (e) => navigate('/') }>
          HOME
        </div>
      </div>
    </div>
  );
}

export default Header;