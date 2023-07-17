import React, { useEffect, useMemo, useState } from "react";
import { Group } from "@visx/group";
import { Cluster, hierarchy } from "@visx/hierarchy";
import {
  HierarchyPointNode,
  HierarchyPointLink,
} from "@visx/hierarchy/lib/types";
import { LinkVertical } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import type { NodeShape, DendrogramProps } from "../NodeConfig";
import { aqua, green, background, merlinsbeard } from "../NodeConfig";
import BaseNode from "../BaseNode/BaseNode";
const defaultMargin = { top: 40, left: 0, right: 0, bottom: 40 };
type TNodeVisx = ReturnType<typeof hierarchy<NodeShape>>;
const NodeGraph = ({
  width,
  height,
  margin = defaultMargin,
}: DendrogramProps) => {
  const [nodeData, setNodeData] = useState<TNodeVisx>();
  const getNodes = async () => {
    const response = await fetch("http://localhost:8000/get_all_nodes", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setNodeData(hierarchy(data.message as NodeShape));
  };
  useEffect(() => {
    getNodes();
  }, []);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="top" from={green} to={aqua} />
      <rect width={width} height={height} rx={14} fill={background} />
      {nodeData && (
        <Cluster<NodeShape> root={nodeData} size={[xMax, yMax]}>
          {(cluster) => (
            <Group top={margin.top} left={margin.left}>
              {cluster.links().map((link, i) => (
                <LinkVertical<
                  HierarchyPointLink<NodeShape>,
                  HierarchyPointNode<NodeShape>
                >
                  key={`cluster-link-${i}`}
                  data={link}
                  stroke={merlinsbeard}
                  strokeWidth="1"
                  strokeOpacity={0.2}
                  fill="none"
                />
              ))}
              {cluster.descendants().map((node, i) => (
                <BaseNode key={`cluster-node-${i}`} node={node} />
              ))}
            </Group>
          )}
        </Cluster>
      )}
    </svg>
  );
};
export default NodeGraph;
