import React, { useState } from 'react';


const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',

  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal, [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us!</h1>
      </div>

      <div className='container contact_div'>
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" name='name' value={data.name} onChange={InputEvent} aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={data.email} onChange={InputEvent} aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Phone Number</label>
              <input type="number" className="form-control" id="exampleInputEmail1" name='number' value={data.number} onChange={InputEvent} aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={data.password} onChange={InputEvent} />
            </div>

            <button type="submit" className="btn btn-outline-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
