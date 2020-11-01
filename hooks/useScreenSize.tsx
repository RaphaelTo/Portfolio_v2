import React from 'react';

const useScreenSize = () => {
  const [width, setWidth] = React.useState();
  const [height, setHeight] = React.useState();

  React.useEffect(() => {
    const getWidthScreen = window.screen.width;
    const getHeightScreen = window.screen.height;
    setWidth(getWidthScreen);
    setHeight(getHeightScreen);
  }, []);

  return [width, height];
};

export default useScreenSize;
