import React  from 'react'

const Peducational = (props) => {

    const { pos, comp, city, from, to } = props.infos;

    return(

        <div className="experience">
            <div className="date">
              <h5 className="description">{from + "-" + to}</h5>
            </div>
            <div className="place">
              <h6>{pos}</h6>
              <h6 className="description">{comp + ", " +city}</h6>
            </div>
          </div>
        
    )
}

export default Peducational;