import React, { useState, useEffect } from "react";

const GeneralForm2 = ({ layout = [], onChange = null, errorFields,setErrorFields }) => {
  const [formState, setFormState] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);

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

  const handleChange = (field, e) => {

    setErrorFields([]);
    setFormState({ ...formState, [e.target.id]: e.target.value });

    if (onChange) onChange(e, field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOutput(true);
  };

  const checkRequiredFields = () => {
    return layout.every((field) => {
      return (field.required && formState[field.id].length) || !field.required;
    });
  };

  useEffect(() => {
    if (!Object.keys(formState).length) return;

    if (checkRequiredFields() && !errorFields.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  return (
    <>
      <div className="form-half">
        <div className = 'header-container'>

        <h1>Form 4</h1>
        <span>Error handling before Submit</span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {layout.map((field, index) => {
            return (
              <div className="input-wrapper">
                <input
                  key={index}
                  className="form-input"
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formState[field.id]}
                  onChange={(e) => handleChange(field, e)}
                />

                {errorFields.includes(field.id)&& <div className = 'error-message'>{field.errorMessage}</div>}
              </div>
            );
          })}

          <button
            className={`submit-button ${buttonDisabled && "disabled-button"}`}
            type="submit"
            disabled={buttonDisabled}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="output-half">
        <h2>On Submit</h2>
        {showOutput &&
          Object.keys(formState).map((key, index) => {
            return (
              <span key = {index}>
                
                {key} : {formState[key]}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default GeneralForm2;
