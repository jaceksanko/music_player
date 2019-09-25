import React from 'react';

const HmburgerMenuSVG = (props) => (
  <svg className={props.opacityClass}
       xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M0.500,13.681 L0.500,11.084 L16.500,11.084 L16.500,13.681 L0.500,13.681 ZM0.500,5.889
                L16.500,5.889 L16.500,8.486 L0.500,8.486 L0.500,5.889 ZM0.500,0.693 L16.500,0.693
                L16.500,3.291 L0.500,3.291 L0.500,0.693 Z"
    />
  </svg>
);
export default HmburgerMenuSVG;