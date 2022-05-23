import React from "react";
import './Sample.css'

const Sample = ({ paragraph, div, span, span2, h1 }) => {
  return (
    <>
      {h1 === "3" ? (
        <div className="html-sample-box">
          <h1 className="app-header">{h1}</h1>
          <p>{paragraph}</p>
          <div>{div}</div>
          <span> {span}</span>
          <span> {span2}</span>
        </div>
      ) : (
        <div>H1 wrong</div>
      )}
    </>
  );
};

export default Sample;
