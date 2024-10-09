import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(args) {
 

  const  click_function = () => {
       newTestew(text);
  }
  const  cheng_text = (data) => {
    setText(data.target.value)
}





 const  [text, setText] = useState("wsasadsds");
 const  [test, newTestew] = useState("wsasadsds");
 const text_lenth =  test.length;
  var text_words =  test.split("");
  var text_wordss = text_words.length;
  if(text_words == ''){
    text_words  = 0; 
  }
  return (
    <div className="mb-3">
      <h2> {args.heading}</h2>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Description
      </label>
      <textarea
      value={text}
      onChange={cheng_text}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3" 
      ></textarea>
      <button className="btn btn-primary mt-3" onClick={click_function}>
        Convert to Uppercase
      </button> 
      <p>Words: {text_words}</p>   <p>Latters: {text_lenth}</p> 
      <p>{test}</p>
    </div>
  );
} 

TextForm.propTypes = {
  heading: PropTypes.string,
};
