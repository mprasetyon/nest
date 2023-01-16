import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export default function PhoneNumberFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      format="+62 (###) ####-####-#####"
      mask="-"
    />
  );
}

PhoneNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
