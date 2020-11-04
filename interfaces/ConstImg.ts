type ImgProject = {
  title: string,
  src: string,
  description: string,
  github: string
};

type ImgSound = {
  name: string,
  src: string
}

export default interface ConstImg {
  project: Array<ImgProject>,
  soundIcon: Array<ImgSound>
};