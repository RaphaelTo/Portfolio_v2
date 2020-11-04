export interface Img {
  title: string,
  src: string,
  description: string,
  github: string
};

export interface StructureImg {
  project: Array<Img>
};

export interface StructureImgState {
  projet: Img
};