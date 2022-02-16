import React from "react";
const Page2=()=>{
    return (
      <div>
        {[...new Array(12)]
          .map(
            () => `
            page2.`
          )
          .join("\n")}
      </div>
    );
}
export default Page2;