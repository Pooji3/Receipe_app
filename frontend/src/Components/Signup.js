import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className="container id=bg-img">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Sign Up</h3>
                <div className="mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Conifrm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Signup