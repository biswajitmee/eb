import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { inView } from 'framer-motion'; // Import inView from Framer Motion
 

const TextInView = () => {
  useEffect(() => {
    const lineElements = document.querySelectorAll('.txt-gradnt-330 span'); // Get all span elements within the component

    lineElements.forEach((element) => {
      inView(element, (isVisible) => {
        const controls = useAnimation();
        if (isVisible) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      });
    });
  }, []);

  return (
    <div className="txt-gradnt-330">
      {/* Wrap each line of text inside separate elements */}
      <span>
        Meet the Dynamic Duo behind mind-blowing designs and cutting-edge animations.
      </span>
      <span>Elevate your web presence with our out-of-the-box brilliance for captivating landing pages.</span>
      <span>From captivating e-commerce platforms to seamless web applications, experience a revolution in digital excellence.</span>
    </div>
  );
};

export default TextInView;
