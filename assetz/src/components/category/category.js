import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import "./category.css";
import Formm from "./categoryForm";
import Form from "./serviceuserForm";
import AssetForm from "./assetForm";
import Pic from "../../assets/images/pic.jpg";

function Category() {
  const [Open, setOpen] = useState(false); //for popup form
  const [Open2, setOpen2] = useState(false); //for user form
  const [Open999, setOpen999] = useState(false); //for asset form
  //Asset form everything
  const [AssetsHelper, setAssetsHelper] = useState({
    Assetnam: "",
    AssetID: "",
  });
  const [Assets, setAssets] = useState(Array());
  const handleOpen999 = () => {
    setOpen999(true);
  };
  const handleChange999 = (e) => {
    const { name, value } = e.target;
    setAssetsHelper({ ...AssetsHelper, [name]: value });
  };
  const handleSave999 = () => {
    const { Assetnam, AssetID } = AssetsHelper;
    if (Assetnam && AssetID) {
      setAssets([...Assets, AssetsHelper]);
      setOpen999(false);
    } else {
      alert("Fill all fields");
    }
  };
  //Asset form everything
  const [Status, setStatus] = useState("");
  const handelStatus = (e) => {
    setStatus(e.target.value);
    setTempForm({ ...tempForm, ["Stats"]: e.target.value });
  };

  const [ServiceUsers, addServiceUsers] = useState(Array());
  const [ServiceUsersEmail, addServiceUsersEmail] = useState(Array());
  const [ServiceUser, setServiceUser] = useState("");
  const handleServiceUser = (e) => {
    setServiceUser(e.target.value);
    setTempForm({ ...tempForm, ["AssetAssignedTo"]: e.target.value });
  };
  //For Temp Form Data
  const [tempForm, setTempForm] = useState({
    CategoryName: "",
    AssetId: "",
    DOA: "",
    Stats: "",
    AssetAssignedTo: "",
  });
  const [tempForm2, setTempForm2] = useState({
    name: "",
    email: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setTempForm({ ...tempForm, [name]: value });
  };
  const handelChange2 = (e) => {
    const { name, value } = e.target;
    setTempForm2({ ...tempForm2, [name]: value });
  };
  let [AllData, setAllData] = useState(Array());
  const handelCancel = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setTempForm({
      CategoryName: "",
      AssetId: "",
      DOA: "",
      Stats: "",
      AssetAssignedTo: "",
    });
    setTempDef("");
    setStatus(""); //kmkm
    setServiceUser("");
    setOpen(true);
  };
  const handleOpen2 = () => {
    setTempForm2({
      name: "",
      email: "",
    });
    setOpen2(true);
  };
  const handelSave = () => {
    const { CategoryName, AssetId, DOA, Stats, AssetAssignedTo } = tempForm;
    if (DOA && Stats && AssetAssignedTo) {
      /* setTempForm({
        ...tempForm,
        CategoryName: TempDef.nam,
        AssetId: TempDef.ID,
      });
*/ setAllData([...AllData, tempForm]);
      //setAssetsHelper({ ...AssetsHelper, Assetnam: CategoryName, ID: AssetId });

      //setAllData([...AllData, tempForm]);
      handelCancel();
    } else {
      alert("Fill all the Fields Before Saving");
    }
  };
  const handelSave2 = () => {
    const { name, email } = tempForm2;
    if (name && email) {
      addServiceUsers([...ServiceUsers, name]);
      addServiceUsersEmail([...ServiceUsersEmail, email]);
      setOpen2(false);
    } else {
      alert("Fill both Values");
    }
  };
  const [TempDef, setTempDef] = useState("");
  const handelAsset = (obj) => {
    setOpen(true);
    /**/ setTempDef(obj["Assetnam"]);
  };
  const handelDiscard = () => {
    const arr = Array();
    const arr2 = Array();
    for (let i = 0; i < AllData.length; i++) {
      if (AllData[i]["CategoryName"] === TempDef.nam) continue;
      arr[i] = AllData[i];
      arr2[i]["Assetnam"] = Assets[i]["Assetnam"];
      arr2[i]["AssetID"] = Assets[i]["AssetID"];
    }
    setAllData(arr);
    setAssets(arr2);

    setOpen(false);
  };

  let username = localStorage.getItem("username");
  return (
    <Grid item xs={9}>
      <Grid container direction="row" alignItems="left" spacing={3}>
        <Grid item xs={12} style={{ marginTop: "30px" }}>
          <Grid container>
            <Grid item>
              <Typography variant="caption" style={{ color: "#fff" }}>
                Welcome
              </Typography>
              <Typography variant="h4" style={{ color: "#fff" }}>
                {username}
              </Typography>
            </Grid>
            <Grid item>
              <img src={Pic} alt="pic" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 0 }}>
          <Typography className="FFont">
            Categories
            ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Typography>
        </Grid>
        {Assets.map((x) => {
          console.log(x["Assetnam"]);
          return (
            <Grid
              item
              xs={2}
              onClick={() => handelAsset(x)}
              style={{
                borderRadius: 10,
                fontWeight: "bold",
                color: "#1d3557",
                textAlign: "center",
                backgroundColor: "white",
                margin: 20,
              }}
            >
              <h4 style={{ marginTop: "35px" }}>{x["Assetnam"]}</h4>
            </Grid>
          );
        })}
        <Grid
          item
          xs={2}
          onClick={handleOpen999}
          style={{
            borderRadius: 10,
            borderStyle: "dashed",
            borderColor: "white",
            margin: 20,
          }}
        >
          {console.log(Open)}
          <h4 style={{ color: "white", marginLeft: "25px" }}>
            {" "}
            Add a new Category
          </h4>
        </Grid>
        <Grid item xs={12}>
          <Typography className="FFont">
            Service Users
            -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Typography>
        </Grid>
        <Grid item xs={12} direction="row">
          {[...Array(ServiceUsers.length).keys()].map((x) => {
            return (
              <Grid container style={{ margin: 20 }}>
                <Grid item xs={1} style={{ marginTop: 10 }}>
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      color: "#1d3557",
                      padding: "0",
                    }}
                  >
                    {x + 1}
                  </Avatar>
                </Grid>
                <Grid item xs={4} style={{}}>
                  <div style={{ color: "white" }}>
                    <Typography variant="caption">Name</Typography>
                  </div>
                  <TextField
                    style={{ width: "40%", color: "white" }}
                    defaultValue={ServiceUsers[x]}
                    InputProps={{
                      readOnly: true,
                      style: { color: "white" },
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <div style={{ color: "white" }}>
                    <Typography variant="caption">Email</Typography>
                  </div>
                  <TextField
                    style={{ width: "47%", color: "white", margin: "0" }}
                    borderColor="white"
                    defaultValue={ServiceUsersEmail[x]}
                    InputProps={{
                      readOnly: true,
                      style: { color: "white" },
                    }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          xs={3}
          onClick={handleOpen2}
          style={{
            borderRadius: 10,
            borderStyle: "dashed",
            borderColor: "white",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "20px 20px 20px 200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AddIcon />
          Add a new Service User
        </Grid>
        <Form
          Open2={Open2}
          setOpen2={setOpen2}
          handelCancel={() => setOpen2(false)}
        >
          <TextField
            onChange={handelChange2}
            fullWidth="true"
            name="name"
            label="Name"
            variant="filled"
            style={{ marginBottom: 20 }}
          />
          <TextField
            onChange={handelChange2}
            fullWidth="true"
            name="email"
            label="E-Mail"
            variant="filled"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handelSave2}
              variant="contained"
              style={{
                width: "40%",
                color: "white",
                backgroundColor: "#1d3557",
                marginTop: "20px",
              }}
            >
              {console.log(ServiceUsers)}
              SAVE
            </Button>
          </div>
        </Form>
        <AssetForm
          Open999={Open999}
          setOpen999={setOpen999}
          handleCancel={() => setOpen999(false)}
        >
          <TextField
            onChange={handleChange999}
            fullWidth="true"
            name="Assetnam"
            label="Asset Name"
            variant="filled"
            style={{ marginBottom: 20 }}
          />
          <TextField
            onChange={handleChange999}
            fullWidth="true"
            name="AssetID"
            label="Asset ID"
            variant="filled"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSave999}
              variant="contained"
              style={{
                width: "40%",
                marginLeft: "4px",
                color: "white",
                backgroundColor: "#1d3557",
                marginTop: "20px",
              }}
            >
              {console.log(Assets)}
              SAVE
            </Button>
          </div>
        </AssetForm>

        <Formm
          Open={Open}
          setOpen={setOpen}
          handelCancel={() => setOpen(false)}
        >
          {/*Create/assign Asset form*/}
          <TextField
            onChange={handelChange}
            fullWidth="true"
            defaultValue={TempDef}
            name="CategoryName"
            label="Category Name"
            variant="filled"
          />
          <TextField
            onChange={handelChange}
            style={{ marginTop: "30px", color: "#1d3557" }}
            name="AssetId"
            fullWidth="true"
            label="Asset Id"
            variant="filled"
          />
          <TextField
            onChange={handelChange}
            style={{ marginTop: "30px", color: "#1d3557" }}
            name="DOA"
            fullWidth="true"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Date of Assignment"
            variant="filled"
          />
          {/*InputlabelProps So that the label dosnt come down*/}
          <TextField
            select
            onChange={handelStatus}
            style={{ marginTop: "30px", color: "#1d3557" }}
            name="Stats"
            fullWidth="true"
            label="Status"
            value={Status}
            variant="filled"
          >
            {["Active", "InActive"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            onChange={handleServiceUser}
            style={{ marginTop: "30px", color: "#1d3557" }}
            name="AssetAssignedTo"
            fullWidth="true"
            label="Asset Assigned to"
            value={ServiceUser}
            variant="filled"
          >
            {ServiceUsers.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/*yet to impliment Displaying Those who are already assigned*/}
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "30px",
              marginLeft: "50px",
            }}
          >
            <Grid item xs={6}>
              <Button
                onClick={handelDiscard}
                variant="outlined"
                style={{ width: "40%", marginRight: "4px" }}
              >
                DISCARD
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handelSave}
                variant="contained"
                style={{
                  width: "40%",
                  marginLeft: "4px",
                  color: "white",
                  backgroundColor: "#1d3557",
                }}
              >
                SAVE
              </Button>
            </Grid>

            {console.log(AllData)}
          </Grid>
        </Formm>
      </Grid>
    </Grid>
  );
}

export default Category;
