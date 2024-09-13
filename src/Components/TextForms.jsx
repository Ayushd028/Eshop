import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Upper Case was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success")
  };
  const handleLowClick = () => {
    // console.log("Lower Case was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success")
  };
  const handleClearClick = (event) => {
    // console.log("On Change");
    let newText = ("");
    setText(newText);
    props.showAlert("Cleared","success")
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const countWords = (text) => {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  };

  return (
    <>
    <div className="container my-3" >
      <div className="mb-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <label htmlFor="myText" className="form-label">
          {props.textArea}
        </label>
        <textarea
          className="form-control"
          placeholder="Enter text to Convert"
          value={text}
          onChange={handleOnChange}
          id="myText"
          rows="10"
          style={{backgroundColor: props.mode === "light" ? "white" : "LightGray"}}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled = {text.length===0}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick} disabled = {text.length===0}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled = {text.length===0}>
        Clear Text
      </button>
    </div>
     <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <h2 > Your text Summary</h2>
       <p>{countWords(text)} Words and {text.length} Characters</p>
       <p>Time Taken to Read is: {Math.ceil(countWords(text) * 0.008)} minutes</p>
       <h3> Text Preview</h3>
       <p><b>{text}</b></p>
    </div>
    </>
  );
}