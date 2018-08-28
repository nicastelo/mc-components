var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint jsx-quotes: 0 */
import React from 'react';

var Arrow = function Arrow(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 21", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      d: "M.547 18.769a1 1 0 0 0 1.378 1.45l-1.378-1.45zm10.218-8.331l.69.724a1 1 0 0 0 0-1.45l-.69.726zM1.925.656a1 1 0 0 0-1.378 1.45L1.925.656zm0 19.563l9.53-9.057-1.379-1.45L.547 18.77l1.378 1.45zm9.53-10.506L1.924.656.547 2.106l9.53 9.056 1.377-1.45z",
      fill: "#fff"
    })
  );
};

export default Arrow;