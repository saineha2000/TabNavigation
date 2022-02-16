import React from "react";
const Page0 = () => {
  return (
    <div>
      {[...new Array(12)]
        .map(
          () => `
            page0.`
        )
        .join("\n")}
    </div>
  );
};
export default Page0;
