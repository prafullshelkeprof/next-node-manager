"use client";
import React, { useMemo } from "react";
import { Group } from "@visx/group";
import {
  HierarchyPointNode,
} from "@visx/hierarchy/lib/types";
import type { NodeShape } from "../NodeDetails";
import RootNode from "../RootNode/RootNode";

const citrus = "#ddf163";
const white = "#ffffff";
export const background = "#306c90";

const BaseNode = ({ node }: { node: HierarchyPointNode<NodeShape> }) => {
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;

  return (
    <Group top={node.y} left={node.x}>
      {node.depth !== 0 && (
        <circle
          r={12}
          fill={background}
          stroke={isParent ? white : citrus}
          onClick={() => {
            alert(`clicked: ${JSON.stringify(node.data.name)}`);
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
    </Group>
  );
}

export default BaseNode;