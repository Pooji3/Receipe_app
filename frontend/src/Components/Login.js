import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="b-img">
      <div className='border border-3 border-success p-3 bg-light'>
        <form>
          <h2 className='text-center'>Login</h2>

          <div className='mb-3'>
            <label htmlFor="Email">Email</label>
            <input type="email" 
              placeholder="Enter Your Email" 
              name="Email"
              className="form-control" />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="Password" 
              placeholder="Enter Your password" 
              name="Password"
              className="form-control" />
          </div>

          <div className='mb-3'>
            <input type="checkbox"/>
            <label htmlFor='Checkbox' className='ms-2'>Remember Your Password</label>
          </div>

          <div className='d-grid'>
            <button className='btn btn-danger'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

