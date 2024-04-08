import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{backgroundColor:"#0c173f", borderRadius:'42px'}}>
        <div className="section-title">
          <h2 style={{color:'white', paddingTop:"10px"}}>Our Services</h2>
          <p style={{color:'white'}}>
          We strive to transform organizations
through innovative solutions offered
around leadership talent.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" >
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 style={{color:'white'}}>{d.name}</h3>
                    <p style={{color:'white'}}>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
