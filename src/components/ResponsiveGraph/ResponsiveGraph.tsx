"use client";

import { ParentSize } from "@visx/responsive";
import NodeGraph from "../Node/NodeGraph/NodeGraph";
const ResponsiveGraph = () => {
  return (
    <ParentSize>
      {({ width, height }) => <NodeGraph width={width} height={height} />}
    </ParentSize>
  );
};

export default ResponsiveGraph;
