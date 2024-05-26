import React from "react";
import Input from "./input";

function FormikController(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;

    default:
      return;
  }
}

export default FormikController;
