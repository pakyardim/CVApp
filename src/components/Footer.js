import React from "react";
import Copyright from '../assets/copyright.png';

const Footer = () =>  {

  return (
    <footer>
      <div className="copyright">
        <div className="near">
          <p>Copyright</p>
          <img src={Copyright} alt="copyright" className="copy"/>
        </div>
        <div className="link">
          <p>2022</p>
          <a href="#">pakyardim</a>
          <p>||</p>
          <a href="#">aysuakbaba</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
