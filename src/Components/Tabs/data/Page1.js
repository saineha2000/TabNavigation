import React from "react";
const Page1=()=>{
    return (
      <div>
        {[...new Array(12)]
          .map(
            () => `
            page1.`
          )
          .join("\n")}
      </div>
    );
}
export default Page1;