import React from "react";

const Practical = (props) => {

  const handleClick = () => {

    props.setComps(prevComp => (
      [...prevComp, props.practical]
    ));

    props.setPractical((prevData) => ({
      ...prevData,
      practical: {
        ...prevData.practical,
      },
    }));
  };

  const handleChange = (e) => {
    props.setPractical((prevData) => ({
      ...prevData,
      practical: {
        ...prevData.practical,
        [e.target.name]: e.target.value,
      },
    }));
  };



  return (
    <div className="practical">
      <form id="cv-prac">
        <label id="position">Position</label>
        <input
          id="pos"
          name="pos"
          value={props.practical.pos}
          onChange={handleChange}
          type="text"
          required
          placeholder="Enter your position"
        />
        <label id="company">Company</label>
        <input
          name="comp"
          onChange={handleChange}
          id="company-name"
          value={props.practical.comp}
          type="text"
          required
          placeholder="company"
        />
        <label id="city">City</label>
        <input
          name="city"
          onChange={handleChange}
          id="city-name"
          value={props.practical.city}
          type="text"
          required
          placeholder="city"
        />
        <label id="from">From</label>
        <input
          name="from"
          onChange={handleChange}
          id="From"
          type="text"
          value={props.practical.from}
          required
          placeholder="from"
        />
        <label id="to">To</label>
        <input
          name="to"
          onChange={handleChange}
          value={props.practical.to}
          id="To"
          type="text"
          required
          placeholder="to"
        />
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

export default Practical;
