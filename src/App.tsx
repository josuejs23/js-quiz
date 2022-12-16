import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Code } from "./components/Code";
import { Option } from "./components/Option";

// import './App.css'
import { data } from "./data/data";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="animate__animated animate__bounce">
        <h2>{data[count].titulo}</h2>
        <button onClick={() => setCount(Math.max(count - 1, 0))}>Prev</button>
        <button onClick={() => setCount(count + 1)}>Next</button>
        <button onClick={() => setCount(Math.max(count + 1, 0))}>Goto</button>
        <input type="text" name="goto" value={count} id="" />
        <Code code={data[count].codigo} />
        <ul>
          {data[count].option.map((opt) => (
            <Option
              key={opt}
              option={opt}
              correct={data[count].correct}
              onClick={() => {
                opt.substring(0, 1) === data[count].correct
                  ? console.log("Correcto")
                  : console.log("Fallaste");
              }}
            />
          ))}
        </ul>

        {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
        <details dangerouslySetInnerHTML={{ __html: data[count].awnser }} />
      </div>
    </div>
  );
}

export default App;
