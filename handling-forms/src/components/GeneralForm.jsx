import React, { useState, useEffect } from "react";

const GeneralForm = ({ layout = [] }) => {
  const [formState, setFormState] = useState({});
  const [showOutput, setShowOutput] = useState(false);

  //This UE will create a form State from the passed layout.
  useEffect(() => {
    let temp = {};
    layout.forEach((field) => {
      let newField = { [field.id]: "" };
      Object.assign(temp, newField);
    });

    setFormState(temp);
  }, [layout]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOutput(true);
  };

  return (
    <>
      <div className="form-half">
      <div className = 'header-container'>

      <h1>Form 2</h1>
      <span>Generalized Form</span>
      </div>
        <form className="form" onSubmit={handleSubmit}>
          {layout.map((field, index) => {
            return (
              <input
                key={index}
                className="form-input"
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={formState[field.id]}
                onChange={handleChange}
              />
            );
          })}

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

export default GeneralForm;
