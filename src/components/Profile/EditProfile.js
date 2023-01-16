import React, { Component } from "react";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { MdEdit } from "react-icons/md";

import { List, ListItem, ListItemText } from "@material-ui/core/";

import AvatarProfile from "../../assets/img/Ellipse 1.png";

export default class EditProfile extends Component {
  render() {
    return (
      <div className="flex justify-center font-roboto md:container md:mx-auto container mx-auto px-16 py-8 lg:flex">
        <div className="md:flex w-full shadow-lg rounded-2xl border-2 border-gray-200">
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <p className="font-bold text-gray-600 text-2xl pl-8 pt-6">
              Edit Profile
            </p>
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={4}>
                  <div className="flex justify-center">
                    <div>
                      {" "}
                      <Avatar
                        alt="Avatar Profile"
                        src={AvatarProfile}
                        sx={{ width: 100, height: 100 }}
                      />
                      <Button color="secondary"> Edit Profile</Button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400">
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Full Name"
                          secondary="Vidynta Shafa"
                        />
                      </ListItem>
                    </List>
                  </div>
                  <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400">
                    <ListItem>
                      <ListItemText
                        primary="Password"
                        secondary="***********"
                      />
                    </ListItem>
                    <IconButton
                      color="primary"
                      aria-label="password"
                      component="span"
                    >
                      <MdEdit />
                    </IconButton>
                  </div>
                  <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400">
                    <ListItem>
                      <ListItemText
                        primary="Phone Number"
                        secondary="087877612304"
                      />
                    </ListItem>
                    <p className="text-green-600"> Terverifikasi</p>
                  </div>
                  <div className="flex justify-between py-2 px-8 text-base font-semibold text-gray-400">
                    <ListItem>
                      <ListItemText
                        primary="Email"
                        secondary="vidyntashafa@gmail.com"
                      />
                    </ListItem>
                    <p className="text-green-600"> Terverifikasi</p>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    );
  }
}
