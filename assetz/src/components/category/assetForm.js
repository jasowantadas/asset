import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import React from "react";
function AssetForm(props) {
  const { Open999, children } = props;
  return (
    <>
      <Dialog
        style={{ marginLeft: "900px", fontWeight: "bold" }}
        open={Open999}
      >
        <DialogTitle>
          <ArrowBackIcon onClick={props.handleCancel} />
          {"    "}Add Asset
        </DialogTitle>
        <DialogContent style={{ height: "100vh" }}>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default AssetForm;
