import React from "react";

const Educational = (props) => {

  const handleClick = () => {

    props.setComps(prevComp => (
      [...prevComp, props.educational]
    ));

    props.setEducational((prevData) => ({
      ...prevData,
      educational: {
        ...prevData.educational,
      },
    }));


  };

  const handleChange = (e) => {
    props.setEducational((prevData) => ({
      ...prevData,
      educational: {
        ...prevData.educational,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <div className="educational">
      <form id="cv-edu">
        <label name="uni" id="uni-name">University Name</label>
        <input
          onChange={handleChange}
          id="uni"
          name="uni"
          value={props.educational.uni}
          type="text"
          required
          placeholder="Enter your university"
        />
        <label id="city">City</label>
        <input value={props.educational.city} name="city" onChange={handleChange} id="city-name" type="text" required placeholder="city" />
        <label id="degree">Degree</label>
        <input value={props.educational.degree} name="degree" onChange={handleChange} id="Degree" type="text" required placeholder="degree" />
        <label id="Subject">Subject</label>
        <input value={props.educational.subject} name="subject" onChange={handleChange} id="subject" type="text" required placeholder="subject" />
        <label id="from">From</label>
        <input value={props.educational.from} name="from" onChange={handleChange} id="From" type="number" min="1930" max= "2100" required placeholder="from" />
        <label id="to">To</label>
        <input value={props.educational.to} name="to" onChange={handleChange} id="To" type="number" min="1930" max= "2100" required placeholder="to" />
      </form>
      <div className="bottom-but">
        <button onClick={handleClick} type="button" className="info" name="button">
            Add
        </button>
        <button type="button" className="info" name="button">
            Remove
        </button>
      </div>
    </div>
  );
};

export default Educational;
