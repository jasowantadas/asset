import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Loginpageimg from "../../assets/images/Loginpageimg.jpg";
import PersonIcon from "@material-ui/icons/Person";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useHistory} from 'react-router-dom';
import PetsRoundedIcon from "@material-ui/icons/PetsRounded";

function Login() {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem('username', values.username);
    localStorage.setItem('password', values.password);
    history.push('/category');
  }

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={7}
          style={{
            backgroundColor: "#e63845",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Loginpageimg}
            alt="img"
            height="500px"
            width="500px"
            style={{ marginTop: "100px" }}
          />
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={12} style={{ padding: '30px', display: 'flex', justifyContent:'space-between'}}>
              <Typography variant="h5" align="left">ASSETZ</Typography>
              <PetsRoundedIcon fontSize='large'/>
            </Grid>
            <Grid item xs={12} style={{marginTop: '90px', marginBottom: '50px'}}>
              <Typography variant="h4" align="left" style={{ paddingLeft: '80px', color:'#1d3557'}}><strong>Log In</strong></Typography>
              <Typography variant="subtitle2" align="left" style={{  paddingLeft: '80px',color:'#808080'}}>Log into your account</Typography>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "20px"}}>
              <TextField
                variant="outlined"
                name="username"
                value={values.username}
                type="text"
                label="Username"
                onChange={handleChange}
                style={{ width: "60%", background: "#DCDCDC", marginLeft: '80px'}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" style={{marginRight: "10px"}}>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="password"
                value={values.password}
                type={values.showPassword ? "text" : "password"}
                label="Password"
                onChange={handleChange}
                style={{ width: "60%", background: "#DCDCDC", marginLeft: '80px'}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  width: "60%",
                  marginTop: "30px",
                  borderRadius: "20px",
                  height: "60px",
                  background: "#1d3557",
                  color: "#fff",
                  marginLeft: '80px'
                }}
                onClick={handleSubmit}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
