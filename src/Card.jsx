import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return(
  <div className="col-md-4 col-xs-10 mx-auto">
    <div className="card p-3">
      <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill py-2 d-flex justify-content-center mx-auto w-50">
          {props.btnname}
        </NavLink>
      </div>
    </div>
  </div>
  );
};
export default Card;
