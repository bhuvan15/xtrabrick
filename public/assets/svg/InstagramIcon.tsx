import React from "react";

const InstagramIcon:React.FC<{fill?: string}> = ({fill = 'white'}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0032 4.97168C7.16742 4.97168 4.87158 7.2302 4.87158 10.0144C4.87158 12.8012 7.16992 15.0572 10.0032 15.0572C12.8391 15.0572 15.1349 12.7987 15.1349 10.0144C15.1349 7.22774 12.8366 4.97168 10.0032 4.97168ZM10.0032 13.2876C8.16242 13.2876 6.67242 11.8226 6.67242 10.0144C6.67242 8.20632 8.16325 6.74132 10.0032 6.74132C11.8432 6.74132 13.3341 8.20632 13.3341 10.0144C13.3349 11.8226 11.8441 13.2876 10.0032 13.2876Z"
        fill={fill}
      />
      <path
        d="M14.1235 0.253626C12.2835 0.169283 7.72602 0.173377 5.88436 0.253626C4.26602 0.328143 2.83852 0.712191 1.68769 1.84305C-0.235644 3.73299 0.0101894 6.27967 0.0101894 10.0145C0.0101894 13.837 -0.206477 16.3247 1.68769 18.186C3.61852 20.0825 6.24769 19.8344 10.0035 19.8344C13.8569 19.8344 15.1869 19.8368 16.5494 19.3185C18.4019 18.6118 19.8002 16.9847 19.9369 14.0622C20.0235 12.2533 20.0185 7.77573 19.9369 5.96604C19.7719 2.51615 17.8877 0.42395 14.1235 0.253626ZM17.036 16.9356C15.7752 18.1745 14.026 18.064 9.97936 18.064C5.81269 18.064 4.14186 18.1246 2.92269 16.9233C1.51852 15.5501 1.77269 13.3448 1.77269 10.0014C1.77269 5.47718 1.30019 2.21891 5.92102 1.98635C6.98269 1.9495 7.29519 1.93722 9.96769 1.93722L10.0052 1.96178C14.446 1.96178 17.9302 1.50485 18.1394 6.04465C18.1869 7.08052 18.1977 7.39169 18.1977 10.0137C18.1969 14.0605 18.2752 15.7122 17.036 16.9356Z"
        fill={fill}
      />
      <path
        d="M15.3393 5.95086C16.0016 5.95086 16.5385 5.42331 16.5385 4.77255C16.5385 4.12179 16.0016 3.59424 15.3393 3.59424C14.677 3.59424 14.1401 4.12179 14.1401 4.77255C14.1401 5.42331 14.677 5.95086 15.3393 5.95086Z"
        fill={fill}
      />
    </svg>
  );
};

export default InstagramIcon;