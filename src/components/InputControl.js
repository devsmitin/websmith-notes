import React from "react";

function InputControl(props) {
  const [value, setValue] = useState(null);

  let onChange = (e) => {
    let { handler, id } = props;

    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValue(value);
  };

  const { label, value, handler, type, ...inputProps } = props;
  const nontext_elms = ["textarea", "select", "checkbox", "radio"];

  return (
    <>
      {label && (
        <label htmlFor={inputProps.id} className="form-label">
          {label}:
        </label>
      )}

      {type === "textarea" && (
        <textarea value={value} onChange={onChange} {...inputProps}></textarea>
      )}
      {!nontext_elms.includes(type) && (
        <input value={value} onChange={onChange} {...inputProps} />
      )}
    </>
  );
}

export default InputControl;
