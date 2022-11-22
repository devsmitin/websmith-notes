import React, { useEffect, useState } from "react";

function InputControl(props) {
  const { label, value, ...inputProps } = props;

  const [localValue, valueHandler] = useState(value || "");
  const nontext_elms = ["textarea", "select", "checkbox", "radio"];

  useEffect(() => {
    valueHandler(props.value);
  }, [props.value, valueHandler]);

  const onChange = (e) => {
    const target = e.target;
    const newValue = target.type === "checkbox" ? target.checked : target.value;
    valueHandler(newValue);
  };

  return (
    <>
      {label && (
        <label
          htmlFor={inputProps.id}
          className="text-gray- dark:text-gray-100 text-sm font-bold leading-tight tracking-normal"
        >
          {label}:
        </label>
      )}

      {props.type === "textarea" && (
        <textarea
          value={localValue}
          onChange={onChange}
          {...inputProps}
        ></textarea>
      )}
      {!nontext_elms.includes(props.type) && (
        <input value={localValue} onChange={onChange} {...inputProps} />
      )}
    </>
  );
}

export default InputControl;
