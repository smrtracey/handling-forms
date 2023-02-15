import React, { useState } from "react";

const Form1 = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showOutput, setShowOutput] = useState(false);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowOutput(true);
  };

  return (
    <>
      <div className="form-half">
      <div className = 'header-container'>

          <h1>Form 1</h1>
          <span>Basic form State</span>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="form-input"
            type="text"
            id="username"
            placeholder="Username"
            value={formState.username}
            onChange={onChange}
          />

          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={onChange}
          />

          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={onChange}
          />

          <input
            className="form-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={onChange}
          />

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="output-half">
        <h2>On Submit</h2>

        {showOutput &&
          Object.keys(formState).map((key, index) => {
            return (
              <span>
                {" "}
                {key} : {formState[key]}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default Form1;
