import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import type { NodeShape } from "../NodeDetails";
import { Group } from "@visx/group";
export const background = "#306c90";
const width = 40;
const height = 20;
const centerX = -width / 2;
const centerY = -height / 2;

const RootNode = ({ node }: { node: HierarchyPointNode<NodeShape> }) => {
  return (
    <Group top={node.y} left={node.x}>
      <rect
        width={width}
        height={height}
        y={centerY}
        x={centerX}
        fill="url('#top')"
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: "none" }}
        className="fill-slate-200"
      >
        {node.data.name}
      </text>
    </Group>
  );
};
export default RootNode;
