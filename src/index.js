import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  let [count, setCount] = useState(1);
  const handelMouseOver = () => {
    setCount((count) => count + 1);
    setText("MouseOver " + count);
    console.log(count);
  };
  const handelMouseUp = () => {
    setCount((count) => count + 1);
    setText("MouseUp " + count);
    console.log(count);
  };

  const handelMouseDown = () => {
    setCount((count) => count + 1);
    setText("MouseDown " + count);
    console.log(count);
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text={text} x={10} y={10} fontSize={24} fill={"black"} />
        <Circle
          x={150}
          y={150}
          radius={70}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
          onMouseOver={handelMouseOver}
          onMouseUp={handelMouseUp}
          onMouseDown={handelMouseDown}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
