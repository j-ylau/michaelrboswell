// components/Report.js
"use client"
import React, { useEffect } from "react";

const Report = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.dropbox.com/static/api/2/dropins.js";
    script.id = "dropboxjs";
    script.dataset.appKey = "wdyjw3bny9d2584";
    // script.onload = () => {
    //   window.Dropbox.embed(
    //     {
    //       link: "https://www.dropbox.com/sh/75fk6u54v84l1gf/AAAe3brMbUmro2W0bGNllY15a?dl=0",
    //       folder: true,
    //     },
    //     document.getElementById("dropbox-container")
    //   );
    // };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex w-full h-full p-20 shadow-lg">
      <script
        type="text/javascript"
        src="https://www.dropbox.com/static/api/2/dropins.js"
        id="dropboxjs"
        data-app-key="wdyjw3bny9d2584"
      ></script>
      {/* Dropbox Embed Container */}
      <div id="dropbox-container" className="w-full">
        <a
          href="https://www.dropbox.com/sh/75fk6u54v84l1gf/AAAe3brMbUmro2W0bGNllY15a?dl=0"
          data-height="1000px"
          data-width="100%"
        ></a>
      </div>
    </section>
  );
};

export default Report;
