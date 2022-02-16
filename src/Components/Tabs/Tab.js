import { Tab } from "@mui/material";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Home from "../Routing/Home";
import { Button, Tabs } from "@material-ui/core";
import Page1 from "./data/Page1";
import Page2 from "./data/Page2";
import Page3 from "./data/Page3";

const comparray = [<></>, <Page1 />, <Page2 />, <Page3 />];

const MyTab = forwardRef((props, ref) => {
  const tabno = props.tabno;
  console.log(tabno);
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleChange = (event, newvalue) => {
    setSelectedTab(newvalue);
  };
  const [tabs, setTabs] = useState([]);
  const [panels, setPanels] = useState([
    {
      value: "0",
      child: () => {
        return <div>{comparray[0]}</div>;
      },
    },
  ]);
  const [tabIndex, setTabIndex] = useState(1);
  useImperativeHandle(ref, () => ({
    createNewTab() {
      const newTab = {
        value: `${tabIndex}`,
        label: `Dynamic tab ${tabIndex}`,
      };
      setTabs([...tabs, newTab]);
      const newpanel = {
        value: `${tabIndex}`,
        child: () => {
          return <div>{comparray[tabno]}</div>;
        },
      };
      setPanels([...panels, newpanel]);
      setSelectedTab(`${tabIndex}`);
      setTabIndex(tabIndex + 1);
    },
  }));

  return (
    <TabContext value={selectedTab}>
      <TabList
        onChange={handleChange}
        aria-label="lab API tabs example"
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            style={{ width: "15%" }}
            value={tab.value}
          />
        ))}
      </TabList>
      {panels.map((panel) => (
        <TabPanel key={panel.value} value={panel.value}>
          {panel.child()}
        </TabPanel>
      ))}
    </TabContext>
  );
});
export default MyTab;
