import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import PetsRoundedIcon from "@material-ui/icons/PetsRounded";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function Sidebar({ children }) {
  const SidebarData = [
    {
      title: "CATEGORIES",
      icon: <CategoryOutlinedIcon />,
      link: "/category",
    },
    { title: "ASSET LOGS", icon: <ReceiptIcon />, link: "/logs" },
    {
      title: "LOG OUT",
      icon: <ExitToAppOutlinedIcon />,
      link: "/signin",
    },
  ];

  return (
    <>
      <Grid container style={{ backgroundColor: "#1d3557", padding: 20 }}>
        <Grid
          item
          xs={2}
          style={{
            borderRadius: 30,
            marginLeft: 20,
            marginRight: 80,
            backgroundColor: "white",
            height: "95vh",
          }}
        >
          {/*Logo*/}
          <Avatar
            style={{
              marginLeft: 95,
              marginTop: 10,
              marginBottom: -20,
              backgroundColor: "black",
            }}
          >
            <PetsRoundedIcon />
          </Avatar>
          <h1 style={{ marginLeft: 65, marginBottom: "30%" }}>Assetz</h1>

          {/*Button list*/}
          <Grid container style={{ marginLeft: "0px" }}>
            <Grid item xs={12}>
              <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                  return (
                    <li
                      style={{ borderRadius: 10, marginBottom: 10 }}
                      key={key}
                      className="row"
                      id={window.location.pathname === val.link ? "active" : ""}
                      onClick={() => {
                        window.location.pathname = val.link;
                      }}
                    >
                      <div id="icon">{val.icon}</div>
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        {children}
      </Grid>
    </>
  );
}

export default Sidebar;
