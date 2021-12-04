import React from 'react'

import { ExampleComponent } from 'online-pose'
import 'online-pose/dist/index.css'


class Saver {
  constructor() {
    this.frames = [];
  }
}

const App = () => {
  const [clicked, setClicked] = React.useState(0);
  const saver = React.useRef(new Saver());
  console.log(saver.current);
  return <>
    <p>Clicked {clicked} times </p>
    <ExampleComponent handlePoses={(poses) => {
      if (saver.current && poses) {
        saver.current.frames.push(poses);
      }
    }} text="Create React Library Example 😄" />
    <button onClick={() => setClicked(clicked + 1)}>Click</button>
  </>
}

export default App
