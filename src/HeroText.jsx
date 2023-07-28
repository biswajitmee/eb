import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function HeroText() {
  return (
     <TypeAnimation
     sequence={[
       'Unlocking Digital Potential', // Types 'One'
       1000, // Waits 1s
       'Empowering Your Digital Vision', // Deletes 'One' and types 'Two'
       2000, // Waits 2s
       'Empowering Businesses Digitally', // Types 'Three' without deleting 'Two'
       () => {
         console.log('Sequence completed');
       },
     ]}
     wrapper="span"
     cursor={true}
     repeat={Infinity}
     style={{ fontSize: '2em', display: 'inline-block' }}
     omitDeletionAnimation={true}
   />
  )
}
