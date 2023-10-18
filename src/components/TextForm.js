


import React,{useState} from 'react'

export default function TextFrom(props) {

  const handleUpClick=()=>{
    console.log("UppeerCase Was Clicked"+ text );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","Success");
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handleLoClick=()=>{
    console.log("LoweCase Was Clicked"+ text );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","Success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Tect Copied","Success");
  }
  const clearText = ()=>{
    setText("")
}
  const[text , setText]=useState("");
  return (
      <>
    <div className='container' style={{color : props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#13466e':'white',color : props.mode ==='dark'?'white':'#042743'}}  id="myBox" rows="8" placeholder='Enter your text here'></textarea>
           </div>

           <button disabled= {text.length===0}   className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
           <button  disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
           <button className="btn btn-primary my-2" onClick={clearText}>Clear Text</button>
           <button disabled= {text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
     </div>

     <div className="container my-4" style={{color : props.mode ==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words  and {text.length} Characters </p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing  to preview it"}</p>
     </div>
      </>
  )
}
