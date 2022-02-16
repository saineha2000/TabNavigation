import React, { useRef, useState } from "react";
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
import { TabsContext } from "@mui/material";
import Tab1 from "./Tab";
import Page1 from "./data/Page1";
import Page2 from "./data/Page2";
import Page3 from "./data/Page3";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    backgroundColor: "inherit",
  },
}));

const drawerWidth = 240;
function Mycustomtabs() {
  const [open, setOpen] = useState(false);
  const [expandlist, setexpandlist] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const childRef = useRef();
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlelistopen = () => {
    setexpandlist(!expandlist);
    // setSelectedIndex(-1);
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
              <ListItemText primary="pages" />
              {expandlist ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandlist} unmountOnExit timeout="auto">
              <List component="div" style={{ marginLeft: "20px" }}>
                <ListItem
                  button
                  component={Link}
                  to="/happy"
                  selected={selectedIndex === 5}
                  onClick={() => {
                    childRef.current.createNewTab();
                  }}
                >
                  <ListItemText primary="page1" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/oreo"
                  selected={selectedIndex === 6}
                  onClick={() => {
                    childRef.current.createNewTab();
                  }}
                >
                  <ListItemText primary="page2" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/marie"
                  selected={selectedIndex === 7}
                  onClick={() => {
                    childRef.current.createNewTab();
                  }}
                >
                  <ListItemText primary="page3" />
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
        <Route
          path="/happy"
          element={<Tab1 ref={childRef} comp={<Page1></Page1>} tabno={1} />}
        />
        <Route
          path="/oreo"
          element={<Tab1 ref={childRef} comp={<Page2></Page2>} tabno={2} />}
        />
        <Route
          path="/marie"
          element={<Tab1 ref={childRef} comp={<Page3></Page3>} tabno={3} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Mycustomtabs;
