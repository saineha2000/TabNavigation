import React, { useEffect, useState } from "react";
const Docnames = (props) => {
  const docnames = ["contacts", "about"];
  useEffect(() => {
    document.title = `${docnames[props.pageno]}`;
  });
  return <></>;
};
export default Docnames;
