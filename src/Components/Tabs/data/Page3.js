import React from "react";
const Page3 = () => {
  return (
    <div>
      {[...new Array(12)]
        .map(
          () => `
            page3.`
        )
        .join("\n")}
    </div>
  );
};
export default Page3;
