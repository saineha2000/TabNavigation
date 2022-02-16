import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../Routing/Home";
import Contact from "../Routing/Contact";
import About from "../Routing/About";

import { makeStyles } from "@material-ui/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    backgroundColor: "inherit",
  },
}));

const drawerWidth = 240;
function Leftmenu() {
  const [open, setOpen] = useState(false);
  const [expandlist, setexpandlist] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlelistopen = () => {
    setexpandlist(!expandlist);
  };
  const handleClick = (event, Index) => {
    setSelectedIndex(Index);
  };
  const classes = useStyles();
  return (
    <BrowserRouter>
      <MenuOpenIcon onClick={handleopen}></MenuOpenIcon>
      <div style={{ display: "flex" }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          style={{
            width: drawerWidth,
            backgroundColor: "lightpink",
            marginLeft: drawerWidth,
          }}
          classes={{ paper: classes.drawerPaper }}
        >
          <KeyboardDoubleArrowLeftIcon onClick={handleClose} />
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              selected={selectedIndex === 0}
              onClick={(event) => handleClick(event, 0)}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Contact"
              selected={selectedIndex === 1}
              onClick={(event) => handleClick(event, 1)}
            >
              <ListItemText>contact</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/About"
              selected={selectedIndex === 2}
              onClick={(event) => handleClick(event, 2)}
            >
              <ListItemText>About </ListItemText>
            </ListItem>

            <ListItem button onClick={handlelistopen}>
              <ListItemText primary="biscuits" />
              {expandlist ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandlist} unmountOnExit timeout="auto">
              <List component="div" style={{ marginLeft: "20px" }}>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={(event) => handleClick(event, 3)}
                >
                  <ListItemText primary="happy happy" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 4}
                  onClick={(event) => handleClick(event, 4)}
                >
                  <ListItemText primary="oreo" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 5}
                  onClick={(event) => handleClick(event, 5)}
                >
                  <ListItemText primary="milk bikis" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 6}
                  onClick={(event) => handleClick(event, 6)}
                >
                  <ListItemText primary="parle G" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 7}
                  onClick={(event) => handleClick(event, 7)}
                >
                  <ListItemText primary="crack jack" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 8}
                  onClick={(event) => handleClick(event, 8)}
                >
                  <ListItemText primary="jim jam" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 9}
                  onClick={(event) => handleClick(event, 9)}
                >
                  <ListItemText primary="dark fantacy" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 10}
                  onClick={(event) => handleClick(event, 10)}
                >
                  <ListItemText primary="hide and seek" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 11}
                  onClick={(event) => handleClick(event, 11)}
                >
                  <ListItemText primary="marie gold" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 12}
                  onClick={(event) => handleClick(event, 12)}
                >
                  <ListItemText primary="marie lite" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Leftmenu;
