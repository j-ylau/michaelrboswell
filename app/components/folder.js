// components/Report.js
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
      <iframe
        src="https://drive.google.com/embeddedfolderview?id=1IZQjPhrYBngL3Y86F5DI52tRIf2UGxZb#list"
        style={{ width: "1000px", height: "1000px", border: "0" }}
      ></iframe>
      <iframe
        src="https://drive.google.com/embeddedfolderview?id=1IZQjPhrYBngL3Y86F5DI52tRIf2UGxZb#grid"
        style={{ width: "1000px", height: "1000px", border: "0" }}
      ></iframe>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQR5z3wkt3bub3Ai4qoPmRz5HgVG_m0pSGeTqoEWpHwQfqH7l7U734LyUsr4qWsVwCl-_pykzZeXC1q/pubhtml?widget=true&amp;headers=false"></iframe>
      {/* https://docs.google.com/document/d/1ZBWDXXhJH5bB0gKgmLIgCF4SSQ9sxF3JB76cpvXvKvY/edit?usp=sharing */}

      {/* <div id="dropbox-container" className="w-full">
        <a
          href="https://www.dropbox.com/scl/fi/gpcgfh2y4apqkteaxy4qp/California-CAP-Database-2023-1.xlsx?rlkey=5ind82cw4q2h6nh5zm8yjck5f&dl=0"
          class="dropbox-embed"
          data-height="1000px"
          data-width="100%"
        ></a>
      </div> */}
    </section>
  );
};

export default Report;
