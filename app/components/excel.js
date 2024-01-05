// components/excel.js
import React from "react";
import Card from "@mui/joy/Card";

const MyMap = () => {
  return (
    <div
      className="p-12"
      style={{
        height: "900px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <a
        href="https://www.dropbox.com/scl/fi/gpcgfh2y4apqkteaxy4qp/California-CAP-Database-2023-1.xlsx?dl=0"
        class="dropbox-embed"
        data-height="300px"
        data-width="600px"
      ></a>
    </div>
  );
};

export default MyMap;
