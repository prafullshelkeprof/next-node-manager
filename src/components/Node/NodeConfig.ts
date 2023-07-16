
const NODES = {
  root: 'root',
  manager: 'manager',
  dev: 'dev'
};
type TNODES = keyof typeof NODES
interface NodeShape {
  name: string;
  children?: NodeShape[];
  id: number;
  departmentName?: string[];
  preferredLang?: string[];
  nodeType?: TNODES;
  parentName: string,
  parentId: number,
  nodeHeight?: number;
}
type DendrogramProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};
const aqua = "#37ac8c";
const background = "#306c90";
const green = "#79d259";
const merlinsbeard = "#f7f7f3";

export {
  aqua,
  green,
  background,
  merlinsbeard,
  NODES
}
export type { NodeShape, DendrogramProps, TNODES }