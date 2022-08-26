import React from "react";
import Ppic from "../../assets/pp.png";
import Peducational from "./Peducational";
import Ppractical from "./Ppractical";
import { nanoid } from "nanoid";

const Preview = (props) => {

  const practicalElements = props.pracComps.map((practicalElement) => (<Ppractical key={nanoid()} infos={practicalElement}/>));
  const educationalElements = props.educComps.map((educationalElement) => (<Peducational key={nanoid()} infos={educationalElement}/>));

  const { name, surname, bio } = props.infos.general;

  return (
    <div className="right">
      <div className="name">
        <h2 className="name-tag">{name +" " + surname}</h2>
      </div>
      <div className="features">
        <div className="element">
          <h4 className="name-tag">Description</h4>
          <h6 className="description">{bio}</h6>

          
          <h4 className="name-tag">Experience</h4>
          {practicalElements}

          <h4 className="name-tag">Education</h4>
          {educationalElements}
        </div>
      </div>
      <div className="profile">
        <div className="personal">
          <img src={Ppic} alt="profile" className="photo" />
          <h4 className="name-tag">Personal Details</h4>
        </div>

        <h5 className="name-tag">Address</h5>
        <h6 className="description">Our brilliant, precious developer Aysu forgot to add an input field for this area. So it's blank.
        Thanks for your understanding. </h6>
        <h5 className="name-tag">Phone Number</h5>
        <h6 className="description"></h6>
        <h5 className="name-tag">Email</h5>
        <h6 className="description"></h6>
      </div>
    </div>
  );
};

export default Preview;
