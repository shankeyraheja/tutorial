import React, {useState} from "react"

function News() {

  const [text, setText] = useState("Hello I am a variable in News component")

  return (
    <div style={{backgroundColor:"gray", height:"500px"}} id="news" className="App">
      NEWS PAGE
    </div>
  );
}

export default News;
