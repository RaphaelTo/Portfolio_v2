export const configMusic = (boolPlayOrNot, music) => {
  if (boolPlayOrNot) {
    music.volume = 0.5;
    music.play().then(() => console.log('DJ Khaled another one'))
      .catch(err => console.log(err))
  }
};

export const PlayerEndMusic = (boolPlayOrNot, music) => {
  if (!boolPlayOrNot) {
    return music?.pause()
  }
  
  music.volume = 0.5;
  music?.play().then(() => console.log('DJ Khaled another one'))
    .catch(err => console.log(err))
};

export const pathCursor = '/sound/cursor_oot_v2.mp3';
export const pathStart = '/sound/start_v2.mp3';
export const pathClose = '/sound/close_v2.mp3';
export const pathSelect = '/sound/select_oot_v2.mp3';