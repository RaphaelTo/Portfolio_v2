export const configMusic = (boolPlayOrNot:any, music: any):any => {
  if (boolPlayOrNot) {
    music.volume = 0.5;
    music?.play().then(() => console.log('DJ Khaled another one'))
      .catch((err: any) => console.log(err))
    }
};

export const PlayerEndMusic = (boolPlayOrNot:any, music:any): any => {
  if (!boolPlayOrNot) {
    return music?.pause()
  }
  if (music) {
    music.volume = 0.5;
    music?.play().then(() => console.log('DJ Khaled another one'))
    .catch((err: any) => console.log(err))
  }
};

export const pathCursor: string = '/sound/cursor_oot_v2.mp3';
export const pathStart: string = '/sound/start_v2.mp3';
export const pathClose: string = '/sound/close_v2.mp3';
export const pathSelect: string = '/sound/select_oot_v2.mp3';