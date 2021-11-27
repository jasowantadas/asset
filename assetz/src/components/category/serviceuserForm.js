import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import React from "react";
function Form(props) {
  const { Open2, children } = props;
  return (
    <>
      <Dialog style={{ marginLeft: "900px", fontWeight: "bold" }} open={Open2}>
        <DialogTitle>
          <ArrowBackIcon onClick={props.handelCancel} />
          {"    "}Add Service User
        </DialogTitle>
        <DialogContent style={{ height: "100vh" }}>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Form;
