import React from "react";

const General = (props) => {


  const handleChange = (e) => {
    props.setGeneral((prevData) => ({
      ...prevData,
      general: {
        ...prevData.general,
        [e.target.name]: e.target.value
      }
    }));
  };

  const handleClick = (e) => {
    props.setGeneral((prevData) => ({
      ...prevData,
      general: {
        name: "",
        surname: "",
        bio: "",
      }
    }));
  };

  return (
    <div className="form">
      <form id="cv-personal">
        <label id="name-label">First Name</label>
        <input
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          value={props.general.name}
          required
          placeholder="Enter your name"
        />
        <label id="surname-label">Last Name</label>
        <input
          onChange={handleChange}
          id="surname"
          name="surname"
          type="text"
          value={props.general.surname}
          required
          placeholder="Enter your surname"
        />
        <label id="text">General Info</label>
        <textarea
          onChange={handleChange}
          value={props.general.bio}
          id="area"
          name="bio"
          placeholder="Enter general info..."
        ></textarea>

        <div className="bottom-but">
          <input
            type="file"
            name="myImage"
            accept="image/png, image/gif, image/jpeg , image/jfif"
          />

          <button
            onClick={handleClick}
            type="button"
            className="info"
            name="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default General;
