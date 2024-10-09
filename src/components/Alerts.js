import React from "react";

export default function Alerts(prop) {
  return (
    <div>
      <div 
        className=" my-5 alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> {prop.title}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
