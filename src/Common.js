import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
    return(
        <section id="header" className="d-flex align-items-center my-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{props.name} <strong className="brand-name">Danish Kaushal</strong></h1>
                                <h2 className="my-3">I'm the Front-end Web Developer making websites.</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2 header-img">
                                <img src={props.img} className="img-fluid animated" alt="This is our business image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Common;
