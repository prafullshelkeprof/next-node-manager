import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import type { NodeShape } from "../NodeConfig";
import { Group } from "@visx/group";
const width = 40;
const height = 20;
const centerX = -width / 2;
const centerY = -height / 2;

const RootNode = ({
  node,
  onRootClick,
}: {
  node: HierarchyPointNode<NodeShape>;
  onRootClick?: () => void;
}) => {
  return (
    <Group top={node.y} left={node.x}>
      <rect
        width={width}
        height={height}
        y={centerY}
        x={centerX}
        fill="url('#top')"
        onClick={() => {
          onRootClick?.();
        }}
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
