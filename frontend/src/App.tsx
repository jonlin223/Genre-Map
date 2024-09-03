import React from "react";
import { GraphCanvas } from 'reagraph';

const nodes = [
  {
      id: '1',
      label: '1'
    },
    {
      id: '2',
      label: '2'
    }
  ];
  
  const edges = [
    {
      source: '1',
      target: '2',
      id: '1-2',
      label: '1-2'
    },
    {
      source: '2',
      target: '1',
      id: '2-1',
      label: '2-1'
    }
  ];

const App = () => {
  return (
    <div>
      <GraphCanvas
        nodes={nodes}
        edges={edges}
      />
    </div>
  )
}

export default App;