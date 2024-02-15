// components/folder.js
"use client"
import React, { useEffect, useState } from "react";

const Folder = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check if the browser is Safari
    const safariCheck = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safariCheck);

    const script = document.createElement("script");

    script.src = "https://www.dropbox.com/static/api/2/dropins.js";
    script.id = "dropboxjs";
    script.dataset.appKey = "wdyjw3bny9d2584";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {isSafari && (
        // Popup message recommending to use a different browser
        <div className="fixed top-0 left-0 right-0 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Browser Incompatibility</p>
          <p>It seems you're using Safari. Some features may not work properly. We recommend using a different browser, like Chrome or Firefox, for the best experience.</p>
        </div>
      )}
      <section className="flex w-full h-full p-20 shadow-lg">
        {/* Dropbox Embed Container */}
        <div id="dropbox-container" className="w-full">
          <a
            className="dropbox-embed"
            href="https://www.dropbox.com/sh/75fk6u54v84l1gf/AAAe3brMbUmro2W0bGNllY15a?dl=0"
            data-height="700px"
            data-width="100%"
          ></a>
        </div>
      </section>
    </>
  );
};

export default Folder;
