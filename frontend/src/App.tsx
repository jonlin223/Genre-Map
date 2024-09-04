import React, { useRef } from "react";
import { darkTheme, GraphCanvas, GraphCanvasRef, useSelection } from 'reagraph';
import { edges, nodes } from "./values";

const App = () => {

  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges,
    pathSelectionType: 'all'
  });

  return (
    <div>
      <GraphCanvas
        theme={darkTheme}
        ref={graphRef}
        edgeArrowPosition="none"
        nodes={nodes}
        edges={edges}
        selections={selections}
        actives={actives}
        onCanvasClick={onCanvasClick}
        onNodeClick={onNodeClick}
      />
    </div>
  )
}

export default App;