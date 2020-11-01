import React from 'react';

type ImgeProps = {
  src: string;
  alt: string;
  className?: any;
  onClick?: any;
  width?: string | number;
  height?: string | number;
  keyElement?: any;
};

const Image: React.FC<ImgeProps> = ({
  src,
  alt,
  className,
  onClick,
  width,
  height,
  keyElement,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      height={height}
      width={width}
      key={keyElement}
    />
  );
};

export default Image;
