import React  from 'react'

const Peducational = (props) => {

    const { uni, city, degree, subject, from, to } = props.infos;

    return(

        <div className="experience">
            <div className="date">
              <h5 className="description">{from + "-" + to}</h5>
            </div>
            <div className="place">
              <h6>{uni + ", " + city}</h6>
              <h6 className="description">{"Degree: " + degree}</h6>
              <h6 className="description">{"Subject: " + subject }</h6>
            </div>
        </div>
        
    )
}

export default Peducational;