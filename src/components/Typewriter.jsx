import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'नमस्ते',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hello',
        1000,
        'こんにちは',
        1000,
        '你好',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
