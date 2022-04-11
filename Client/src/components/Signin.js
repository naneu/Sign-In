import React from "react";
import Form from "./Form";

function Signin() {
  return (
    <section>
      <div className="div-wrapper">
        <div className="form-title">
          <p>Sign In to your account</p>
        </div>
        <Form />
        <div className="form-text">
          <p>
            Don't have an account?<span>Sign Up</span>
          </p>
        </div>
        <img src="images/Vector1.png" alt="" />
        <img src="images/Vector.png" alt="" />
        <footer>
          <p className="footer-p">terms of service</p>
          <p className="footer-p">privacy policy</p>
          <p className="footer-p">classic</p>
          <p className="footer-p">© 2022</p>
        </footer>
      </div>
    </section>
  );
}

export default Signin;
