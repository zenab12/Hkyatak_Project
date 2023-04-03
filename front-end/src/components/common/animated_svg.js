import { useEffect } from 'react';

function AnimatedSVG() {
  useEffect(() => {
    const svgElement = document.getElementById('storyset-svg'); // get the SVG element
    if(svgElement){
    // svgElement.beginElement(); // start the animation
    }
  }, []);

  return (
    <div>
      <svg
        id="storyset-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <g>
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
          <image href="/path/to/animated-svg-file.svg" width="100%" height="100%" />
        </g>
      </svg>

    </div>
  );
}

export default AnimatedSVG;
