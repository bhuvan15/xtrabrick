import React from "react";

const InstagramIcon: React.FC<{ fill?: string; height?: number; width?: number }> = ({ fill = "white", height = 40, width= 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.007 10.0332C14.3353 10.0332 9.74365 14.5502 9.74365 20.1187C9.74365 25.6922 14.3403 30.2043 20.007 30.2043C25.6787 30.2043 30.2703 25.6872 30.2703 20.1187C30.2703 14.5453 25.6737 10.0332 20.007 10.0332ZM20.007 26.665C16.3253 26.665 13.3453 23.735 13.3453 20.1187C13.3453 16.5025 16.327 13.5725 20.007 13.5725C23.687 13.5725 26.6687 16.5025 26.6687 20.1187C26.6703 23.735 23.6887 26.665 20.007 26.665Z"
        fill={fill}
      />
      <path
        d="M28.2471 0.596119C24.5671 0.427433 15.452 0.435622 11.7687 0.596119C8.53205 0.745153 5.67705 1.51325 3.37538 3.77496C-0.471288 7.55485 0.0203788 12.6482 0.0203788 20.1179C0.0203788 27.7628 -0.412955 32.7383 3.37538 36.4608C7.23705 40.2538 12.4954 39.7576 20.007 39.7576C27.7137 39.7576 30.3737 39.7625 33.0987 38.7258C36.8037 37.3125 39.6004 34.0583 39.8737 28.2132C40.0471 24.5955 40.0371 15.6403 39.8737 12.0209C39.5437 5.12118 35.7754 0.936768 28.2471 0.596119ZM34.0721 33.96C31.5504 36.4379 28.0521 36.2168 19.9587 36.2168C11.6254 36.2168 8.28371 36.338 5.84538 33.9355C3.03705 31.189 3.54538 26.7786 3.54538 20.0917C3.54538 11.0432 2.60038 4.52668 11.842 4.06156C13.9654 3.98786 14.5904 3.9633 19.9354 3.9633L20.0104 4.01243C28.8921 4.01243 35.8604 3.09858 36.2787 12.1782C36.3737 14.2499 36.3954 14.8722 36.3954 20.1163C36.3937 28.2099 36.5504 31.5132 34.0721 33.96Z"
        fill={fill}
      />
      <path
        d="M30.6791 11.9906C32.0037 11.9906 33.0774 10.9355 33.0774 9.63396C33.0774 8.33244 32.0037 7.27734 30.6791 7.27734C29.3545 7.27734 28.2808 8.33244 28.2808 9.63396C28.2808 10.9355 29.3545 11.9906 30.6791 11.9906Z"
        fill={fill}
      />
    </svg>
  );
};

export default InstagramIcon;