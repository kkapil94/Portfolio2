import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'नमस्ते!',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hello!',
        2000
      ]}
      wrapper="span"
      speed={1}
      style={{ display: 'inline-block'}}
      repeat={Infinity}
    />
  )
}
