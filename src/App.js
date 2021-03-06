import React, { useState } from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState([]);
  const changeColor = () => {
    let redVal = Math.floor(Math.random() * 255);
    let blueVal = Math.floor(Math.random() * 255);
    let greenVal = Math.floor(Math.random() * 255);
    setBgColor([redVal, blueVal, greenVal]);
  }

  return (
    <div style={{ backgroundColor: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`}}>
      <button onClick={changeColor} style={{color: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`}}>Change the color!</button>
    </div>
  )
};
