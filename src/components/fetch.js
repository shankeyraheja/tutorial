import React, {useState, useEffect} from "react"

function Fetch() {
  const [data, setData] = useState([])

  useEffect(() => {
    const data = fetch("https://newsapi.org/v2/everything?q=volcano&apiKey=8ecc1131a6aa459d818b185af3d1258e").then(response => response.json()).then(response => setData(response.articles))
  }, [])
  return (
    <div style={{backgroundColor:"yellow", height:"500px"}} id="home" className="App">
      {data.map(element => {
        return (
          <p>{element.title}</p>
        )
      })}
    </div>
  );
}

export default Fetch;
