import React from 'react';

const useScreenSize = () => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const getWidthScreen = window.screen.width;
    const getHeightScreen = window.screen.height;
    setWidth(getWidthScreen);
    setHeight(getHeightScreen);
  }, []);

  return [width, height];
};

export default useScreenSize;
