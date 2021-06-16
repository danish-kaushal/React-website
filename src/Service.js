import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";

const Service = () => {
  return (
    <>
      <section className="my-5">
        <div className="my-5">
          <h1 className="text-center">Our services</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Cdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} visit={val.visit} btnname={val.btnname} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
