import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { isEmpty, isEmailValid, errorToast } from "../../Helper/FormHelper";

import { loginRequest } from "../../ApiRequest/APIReguest";
function Login() {
  let emailRef,
    passwordRef = useRef();

  const submitLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (isEmailValid(email)) {
      errorToast("Please enter valid email");
    } else if (isEmpty(password)) {
      errorToast("Please enter password");
    } else {
      loginRequest(email, password).then((result) => {
        if (result === true) {
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (passwordRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={submitLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up{" "}
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/ForgetPassword"
                    >
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
