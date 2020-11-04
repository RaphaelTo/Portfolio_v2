type Skill = {
  name: string,
  src: string,
  lvl: number,
  exp: number,
  height: number,
  width: number
};

export default interface ConstSkills {
  skill: Array<Skill>
}