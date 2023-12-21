// components/map.js
import React from 'react';

const MyMap = () => {
  const mapUrl = "https://www.arcgis.com/apps/webappviewer/index.html?id=2d99a46ec3bf427cb2d04ff2052068f2&extent=-14934333.2797%2C3594431.1901%2C-11776566.7672%2C5448487.7482%2C102100";

  return (
    <div style={{ height: '800px', width: '100%', overflow: 'hidden' }}>
      <iframe 
        src={mapUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default MyMap;
