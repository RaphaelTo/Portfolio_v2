import React from 'react';
import IUseMusic from '@/interfaces/IUseMusic';

const useMusic = (): IUseMusic<HTMLAudioElement | string> => {
  const [allMusic, setAllMusic] = React.useState<IUseMusic<HTMLAudioElement | string>>({
    startMusic: '',
    closeMusic: '',
    selectMusic: '',
    cursorMusic: '',
  });

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
