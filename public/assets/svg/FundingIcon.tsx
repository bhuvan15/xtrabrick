import React from "react";

const FundingIcon = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="62" height="62" fill="url(#pattern0_697_6367)" />
      <defs>
        <pattern
          id="pattern0_697_6367"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_697_6367" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_697_6367"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default FundingIcon;