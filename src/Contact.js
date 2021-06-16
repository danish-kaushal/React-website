import React, {useState} from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        msg: ""
    });

    const inputEvent = (event) => {
        const {name, value} = event.target

        setData((preval) =>{
           return{
                ...preval,
                [name]: value
           }
        });
    };

    const formSubmit =(e) => {
        e.preventDefault();
        alert(`My Full Name is ${data.fullname}. My Email Address is ${data.email}. My Mobile No is ${data.phone}. I want to say that ${data.msg}`);
    };

    
  return (
    <>
      <section className="my-5 contact-form">
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your Full Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your Email Address"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone*
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your Mobile No"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message*
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary rounded-pill px-4 py-2" type="submit">
                  Submit form
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
