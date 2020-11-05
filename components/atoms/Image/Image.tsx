import React from 'react';
import ImageNext from 'next/image';

type ImgeProps = {
  src: string;
  alt: string;
  className?: any;
  onClick?: any;
  width: number;
  height: number;
  keyElement?: any;
  layout?: any;
};

const Image: React.FC<ImgeProps> = ({
  src,
  alt,
  className,
  onClick,
  width,
  height,
  keyElement,
  layout,
}) => {
  return (
    <ImageNext
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      height={height}
      width={width}
      key={keyElement}
      layout={layout}
    />
  );
};

export default Image;
