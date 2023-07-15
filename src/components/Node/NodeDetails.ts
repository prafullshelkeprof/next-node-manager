
interface NodeShape {
  name: string;
  children?: NodeShape[];
  id: string;
  departmentName?: [string];
  preferredLang?: [string];
  nodeType?: 'root|manager|dev';
  nodeHeight?: number;
}
type DendrogramProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};
const clusterData: NodeShape = {
  name: "$",
  children: [
    {
      name: "A",
      children: [
        { name: "A1" },
        { name: "A2" },
        {
          name: "C",
          children: [
            {
              name: "C1",
            },
          ],
        },
      ],
      id: ''
    },
    {
      name: "B",
      children: [{ name: "B1", id: '' }, { name: "B2", id: '' }, { name: "B3", id: '' }],
      id: ''
    },

    {
      name: "X",
      id: '',
      children: [
        {
          name: "Z",
          id: '',
        },
      ],
    },
  ],
};
const aqua = "#37ac8c";
const background = "#306c90";
const green = "#79d259";
const merlinsbeard = "#f7f7f3";

export default clusterData;
export {
  aqua,
  green,
  background,
  merlinsbeard,
  clusterData
}
export type { NodeShape, DendrogramProps }