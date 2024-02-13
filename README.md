# react-audio-stream

`react-audio-stream` is a React library providing a custom hook for capturing audio streams from a user's microphone and sending them as Blob chunks at specified time intervals.

## Installation

You can install `react-audio-stream` via npm or yarn:

```bash
npm install react-audio-stream

or

yarn add react-audio-stream
```
## Usage
```jsx
import React from 'react'
import { useAudioStream } from 'react-audio-stream'

const App = () => {
  const sendBlob = (data: Blob) => {
    // write your stream logic here.
    console.log(data)
  }
  const { startStream, stopStream } = useAudioStream(sendBlob)
  return (
    <div>
      <button
        onClick={() => {
          startStream()
        }}
      >
        start stream
      </button>
      <button
        onClick={() => {
          stopStream()
        }}
      >
        stop stream
      </button>
    </div>
  )
}

export default App
```

## API

### `useAudioStream(sendBlob: (blob: Blob) => void, timeSlice?: number)`

A custom React hook for capturing audio streams from a user's microphone and sending them as Blob chunks at specified time intervals.

#### Parameters

- `sendBlob`: A function that handles the received blob chunks.
- `timeSlice`: Optional. Time interval in milliseconds at which to slice the audio data. Default is `500`.

#### Returns

An object with the following methods:

- `startStream()`: Starts capturing audio stream.
- `stopStream()`: Stops capturing audio stream.


## Example

You can find an example usage of useAudioStream in the example directory.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
