import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export default function BankFormatCustom(props) {
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
      format="#### #### #### #### ####"
      mask="_"
    />
  );
}

BankFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
