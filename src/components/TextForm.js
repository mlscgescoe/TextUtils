import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('Enter Your Text Here')

    const upperClick = ()=>{
        // console.log("Upper Case Clicked!!!!!")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const lowerClick = ()=>{
        // console.log("Upper Case Clicked!!!!!")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleChange = (event)=>{
        console.log("Changes Made!!!!")
        setText(event.target.value);
    }

    return (
    <>
      <h4 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="6" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary my-2" onClick={upperClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowerClick}>Convert to LowerCase</button>
      </div>

      <div className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
          <h4>Your Text Summary</h4>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      </div>
    </>
  );
}
