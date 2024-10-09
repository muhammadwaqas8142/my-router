import React, { useState } from "react";

export default function About() {
  const [styles, setstyles] = useState({
    color: "#000",
    backgroundColor: "#fff",
  });

  const change_color = () => {
    if (styles.color === "#fff") {
      {
        setstyles({ color: "#000", backgroundColor: "#fff" });
        newtext('Dark');
      }
    }else{
        setstyles({ color: "#fff", backgroundColor: "#000" });
        newtext('light');
    }
  };

  const [buttontext , newtext] = useState('Dark');

  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={styles}>
        <div className="accordion-item" style={styles}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={styles}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div style={styles} className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={styles}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div style={styles} className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={styles}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={change_color}>
         {buttontext}
        </button>
      </div>
    </div>
  );
}
