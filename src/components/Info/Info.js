import React from "react";
import General from "./General";
import Educational from "./Educational";
import Practical from "./Practical";

const Info = (props) => {

  const [state, setState] = React.useState("general");
  

  const handleClick = e => {
    setState(e.target.name);
  }
    
  return (
    <div className="left">
      <div className="top">
          <div className="button">
            <button onClick={handleClick} type="button" name="general" className="info">General Info</button>
            <button onClick={handleClick} type="button" name="educational" className="info">Educational Info</button>
            <button onClick={handleClick} type="button" name="practical" className="info">Practical Info</button>
          </div>
        </div>
        {state==="general" && <General general={props.infos.general} setGeneral={props.setInfos}/>}
        {state==="educational" && <Educational  setComps={props.setEducComps} comps={props.educComps} educational={props.infos.educational} setEducational={props.setInfos}/>}
        {state==="practical" && <Practical setComps={props.setComps} comps={props.comps} practical={props.infos.practical} setPractical={props.setInfos}/>}
    </div>
  );
  
};

export default Info;
