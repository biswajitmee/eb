import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function HeroText() {
  return (
     <TypeAnimation
     sequence={[
       'Unlocking Digital Potential', // Types 'One'
       3000, // Waits 1s
       'Empowering Your Digital Vision', // Deletes 'One' and types 'Two'
       3000, // Waits 2s
       'Empowering Businesses Digitally',  
       3000,
       'New line for testing 4th animation',  
       3000,
       () => {
         console.log('Sequence completed');
       },
     ]}
     wrapper="span"
     cursor={true}
     repeat={Infinity}
     style={{ fontSize: '2em', display: 'inline-block' }}
     omitDeletionAnimation={true}

     speed={{ type: 'keyStrokeDelayInMs', value: 90 }} // Adjust the value (in milliseconds) for speed
     deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 50 }} // Adjust the value (in milliseconds) for deletion speed
 
   />
  )
}
