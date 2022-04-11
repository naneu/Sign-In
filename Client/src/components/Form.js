import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignInForm() {
  function handleSubmit(event) {
    let mail = event.target[0].value;
    let password = event.target[1].value;
    console.log(mail);
    console.log(password);
    event.preventDefault();
  }
  return (
    <div className="form-center">
      <Form className="signin-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 input-label" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="myemail@address.com"
            className="input-field"
          />
        </Form.Group>

        <Form.Group className="mb-3 input-label" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
            className="input-field"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 checkbox-text checkbox-items"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
          <a href="">forgot password?</a>
        </Form.Group>
        <Form.Group>
          <Button
            className="signin-btn"
            variant="secondary"
            size="lg"
            type="submit"
          >
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignInForm;
