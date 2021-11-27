import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import React from "react";
function Formm(props) {
  const { Open, children } = props;
  return (
    <>
      <Dialog style={{ marginLeft: "900px", fontWeight: "bold" }} open={Open}>
        <DialogTitle>
          <ArrowBackIcon onClick={props.handelCancel} />
          {"    "}Asset Details
        </DialogTitle>
        <DialogContent style={{ height: "100vh" }}>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Formm;
