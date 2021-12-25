# online-pose

> Analyze pose in real-time

[![NPM](https://img.shields.io/npm/v/online-pose.svg)](https://www.npmjs.com/package/online-pose) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save online-pose
```

Add the following in your package.json and npm i.

```
    "@mediapipe/pose": "~0.4.0",
    "@tensorflow-models/pose-detection": "^0.0.6",
    "@tensorflow/tfjs-backend-wasm": "^3.8.0",
    "@tensorflow/tfjs-backend-webgl": "^3.11.0",
    "@tensorflow/tfjs-converter": "^3.8.0",
    "@tensorflow/tfjs-core": "^3.11.0",
    "dat.gui": "^0.7.7",
    "scatter-gl": "0.0.8",
    "stats.js": "^0.17.0",
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'online-pose'
import 'online-pose/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Development

Run `yarn start` in both top level and example directories.

## License

MIT © [maddyonline](https://github.com/maddyonline)
