import React from 'react'
import { useAudioStream } from 'react-audio-stream'

const App = () => {
  const sendBlob = (data: Blob) => {
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
