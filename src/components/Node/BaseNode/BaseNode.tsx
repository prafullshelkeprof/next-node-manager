"use client";
import React, { useState } from "react";
import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import type { NodeShape } from "../NodeConfig";
import RootNode from "../RootNode/RootNode";
import NodeDetails from "@/components/NodeDetails/NodeDetails";

const citrus = "#ddf163";
const white = "#ffffff";
export const background = "#306c90";


const BaseNode = ({ node }: { node: HierarchyPointNode<NodeShape> }) => {
  const isRoot = node.depth === 0;
  const isParent = !!node.children;
  const [selectedNode, setSelectedNode] = useState<NodeShape>();
  if (isRoot) return <RootNode node={node} />;

  return (
    <Group top={node.y} left={node.x}>
      {node.depth !== 0 && (
        <circle
          r={12}
          fill={background}
          stroke={isParent ? white : citrus}
          onClick={() => {
            setSelectedNode(node.data);
          }}
        />
      )}
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: "none" }}
        fill={isParent ? white : citrus}
      >
        {node.data.name}
      </text>
      {selectedNode && (
        <NodeDetails
          selectedNode={selectedNode}
          onClose={() => {
            setSelectedNode(undefined);
          }}
        />
      )}
    </Group>
  );
};

export default BaseNode;
