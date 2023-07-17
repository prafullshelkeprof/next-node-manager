"use client";
import React, { useState } from "react";
import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import { type NodeShape, background, white, citrus } from "../NodeConfig";
import RootNode from "../RootNode/RootNode";
import NodeDetails from "@/components/NodeDetails/NodeDetails";



const BaseNode = ({
  node,
  onUpdate,
}: {
  node: HierarchyPointNode<NodeShape>;
  onUpdate?: () => void;
}) => {
  const isRoot = node.depth === 0;
  const isParent = !!node.children;
  const [selectedNode, setSelectedNode] = useState<NodeShape>();

  return (
    <>
      {isRoot ? (
        <RootNode
          node={node}
          onRootClick={() => {
            setSelectedNode(node.data);
          }}
        />
      ) : (
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
        </Group>
      )}

      {selectedNode && (
        <NodeDetails
          selectedNode={selectedNode}
          isRoot={isRoot}
          onClose={() => {
            onUpdate?.();
            setSelectedNode(undefined);
          }}
        />
      )}
    </>
  );
};

export default BaseNode;
