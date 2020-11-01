import React from 'react';

const useMusic = () => {
  const [allMusic, setAllMusic] = React.useState({});

  React.useEffect(() => {
    const start = new Audio('/sound/start_v2.mp3');
    const close = new Audio('/sound/close_v2.mp3');
    const select = new Audio('/sound/select_oot_v2.mp3');
    const cursor = new Audio('/sound/cursor_oot_v2.mp3');

    setAllMusic({
      startMusic: start,
      closeMusic: close,
      selectMusic: select,
      cursorMusic: cursor,
    });
  }, []);

  return allMusic;
};

export default useMusic;
