import React from "react";
import { GraphCanvas } from 'reagraph';

const nodes = [
  {
    "id": "38",
    "label": "Synthpop"
  },
  {
    "id": "155",
    "label": "Neo-Psychedelia"
  },
  {
    "id": "114",
    "label": "Alternative Dance"
  },
  {
    "id": "36",
    "label": "Chillwave"
  },
  {
    "id": "174",
    "label": "Dance-Pop"
  },
  {
    "id": "200",
    "label": "Progressive Pop"
  },
  {
    "id": "103",
    "label": "Pop Rock"
  },
  {
    "id": "172",
    "label": "Darkwave"
  },
  {
    "id": "157",
    "label": "Gothic Rock"
  },
  {
    "id": "441",
    "label": "Alt-Pop"
  },
  {
    "id": "31",
    "label": "Electropop"
  },
  {
    "id": "37",
    "label": "Singer-Songwriter"
  },
  {
    "id": "141",
    "label": "Art Pop"
  },
  {
    "id": "221",
    "label": "Progressive Electronic"
  },
  {
    "id": "160",
    "label": "Ambient Techno"
  },
  {
    "id": "263",
    "label": "Electronic Dance Music"
  },
  {
    "id": "32",
    "label": "New Wave"
  },
  {
    "id": "69",
    "label": "Psychedelic Pop"
  },
  {
    "id": "39",
    "label": "Dream Pop"
  },
  {
    "id": "192",
    "label": "Alternative R&B"
  },
  {
    "id": "30",
    "label": "Psychedelic Rock"
  },
  {
    "id": "185",
    "label": "Nu-Disco"
  },
  {
    "id": "156",
    "label": "Indietronica"
  },
  {
    "id": "194",
    "label": "Sophisti-Pop"
  },
  {
    "id": "134",
    "label": "MPB"
  },
  {
    "id": "128",
    "label": "Downtempo"
  },
  {
    "id": "4",
    "label": "Indie Pop"
  },
  {
    "id": "140",
    "label": "Twee Pop"
  },
  {
    "id": "23",
    "label": "Post-Punk"
  },
  {
    "id": "191",
    "label": "Glitch Pop"
  },
  {
    "id": "104",
    "label": "Folktronica"
  },
  {
    "id": "159",
    "label": "Progressive House"
  },
  {
    "id": "63",
    "label": "Chamber Pop"
  },
  {
    "id": "136",
    "label": "Baroque Pop"
  },
  {
    "id": "197",
    "label": "Electro-Disco"
  },
  {
    "id": "6",
    "label": "Electronic"
  },
  {
    "id": "459",
    "label": "Contemporary R&B"
  },
  {
    "id": "53",
    "label": "House"
  },
  {
    "id": "201",
    "label": "Ambient Pop"
  },
  {
    "id": "34",
    "label": "Ambient"
  },
  {
    "id": "278",
    "label": "Ambient House"
  },
  {
    "id": "253",
    "label": "Minimal Synth"
  },
  {
    "id": "85",
    "label": "Electro"
  },
  {
    "id": "530",
    "label": "New Rave"
  }
];
  
const edges = [
  {
    "source": "38",
    "target": "155",
    "id": "38-155",
    "size": 2.5
  },
  {
    "source": "38",
    "target": "36",
    "id": "38-36",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "103",
    "id": "38-103",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "114",
    "id": "38-114",
    "size": 3.0
  },
  {
    "source": "38",
    "target": "174",
    "id": "38-174",
    "size": 5.5
  },
  {
    "source": "38",
    "target": "200",
    "id": "38-200",
    "size": 1.0
  },
  {
    "source": "155",
    "target": "36",
    "id": "155-36",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "103",
    "id": "155-103",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "114",
    "id": "155-114",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "174",
    "id": "155-174",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "200",
    "id": "155-200",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "157",
    "id": "38-157",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "172",
    "id": "38-172",
    "size": 1.0
  },
  {
    "source": "38",
    "target": "441",
    "id": "38-441",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "31",
    "id": "38-31",
    "size": 3.0
  },
  {
    "source": "38",
    "target": "37",
    "id": "38-37",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "141",
    "id": "38-141",
    "size": 5.5
  },
  {
    "source": "441",
    "target": "31",
    "id": "441-31",
    "size": 0.5
  },
  {
    "source": "441",
    "target": "37",
    "id": "441-37",
    "size": 0.5
  },
  {
    "source": "441",
    "target": "141",
    "id": "441-141",
    "size": 0.5
  },
  {
    "source": "441",
    "target": "174",
    "id": "441-174",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "221",
    "id": "38-221",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "160",
    "id": "38-160",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "263",
    "id": "38-263",
    "size": 0.5
  },
  {
    "source": "221",
    "target": "160",
    "id": "221-160",
    "size": 0.5
  },
  {
    "source": "221",
    "target": "263",
    "id": "221-263",
    "size": 0.5
  },
  {
    "source": "32",
    "target": "38",
    "id": "32-38",
    "size": 5
  },
  {
    "source": "32",
    "target": "103",
    "id": "32-103",
    "size": 1.0
  },
  {
    "source": "32",
    "target": "141",
    "id": "32-141",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "69",
    "id": "38-69",
    "size": 1
  },
  {
    "source": "69",
    "target": "155",
    "id": "69-155",
    "size": 1
  },
  {
    "source": "38",
    "target": "30",
    "id": "38-30",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "39",
    "id": "38-39",
    "size": 1.0
  },
  {
    "source": "38",
    "target": "156",
    "id": "38-156",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "185",
    "id": "38-185",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "192",
    "id": "38-192",
    "size": 0.5
  },
  {
    "source": "69",
    "target": "30",
    "id": "69-30",
    "size": 0.5
  },
  {
    "source": "69",
    "target": "39",
    "id": "69-39",
    "size": 0.5
  },
  {
    "source": "69",
    "target": "156",
    "id": "69-156",
    "size": 0.5
  },
  {
    "source": "69",
    "target": "185",
    "id": "69-185",
    "size": 0.5
  },
  {
    "source": "69",
    "target": "192",
    "id": "69-192",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "30",
    "id": "155-30",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "39",
    "id": "155-39",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "156",
    "id": "155-156",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "185",
    "id": "155-185",
    "size": 0.5
  },
  {
    "source": "155",
    "target": "192",
    "id": "155-192",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "194",
    "id": "38-194",
    "size": 1.0
  },
  {
    "source": "174",
    "target": "31",
    "id": "174-31",
    "size": 1.5
  },
  {
    "source": "174",
    "target": "194",
    "id": "174-194",
    "size": 0.5
  },
  {
    "source": "32",
    "target": "194",
    "id": "32-194",
    "size": 0.5
  },
  {
    "source": "32",
    "target": "200",
    "id": "32-200",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "134",
    "id": "38-134",
    "size": 1
  },
  {
    "source": "134",
    "target": "141",
    "id": "134-141",
    "size": 1
  },
  {
    "source": "38",
    "target": "128",
    "id": "38-128",
    "size": 0.5
  },
  {
    "source": "134",
    "target": "128",
    "id": "134-128",
    "size": 0.5
  },
  {
    "source": "134",
    "target": "155",
    "id": "134-155",
    "size": 0.5
  },
  {
    "source": "134",
    "target": "156",
    "id": "134-156",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "128",
    "id": "141-128",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "155",
    "id": "141-155",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "156",
    "id": "141-156",
    "size": 0.5
  },
  {
    "source": "4",
    "target": "38",
    "id": "4-38",
    "size": 1
  },
  {
    "source": "4",
    "target": "39",
    "id": "4-39",
    "size": 0.5
  },
  {
    "source": "4",
    "target": "140",
    "id": "4-140",
    "size": 0.5
  },
  {
    "source": "4",
    "target": "156",
    "id": "4-156",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "140",
    "id": "38-140",
    "size": 0.5
  },
  {
    "source": "23",
    "target": "32",
    "id": "23-32",
    "size": 1
  },
  {
    "source": "23",
    "target": "38",
    "id": "23-38",
    "size": 1
  },
  {
    "source": "23",
    "target": "114",
    "id": "23-114",
    "size": 0.5
  },
  {
    "source": "32",
    "target": "114",
    "id": "32-114",
    "size": 1.5
  },
  {
    "source": "31",
    "target": "38",
    "id": "31-38",
    "size": 2
  },
  {
    "source": "31",
    "target": "191",
    "id": "31-191",
    "size": 1
  },
  {
    "source": "38",
    "target": "191",
    "id": "38-191",
    "size": 1.5
  },
  {
    "source": "31",
    "target": "104",
    "id": "31-104",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "159",
    "id": "31-159",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "104",
    "id": "38-104",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "159",
    "id": "38-159",
    "size": 0.5
  },
  {
    "source": "191",
    "target": "104",
    "id": "191-104",
    "size": 0.5
  },
  {
    "source": "191",
    "target": "159",
    "id": "191-159",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "63",
    "id": "38-63",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "136",
    "id": "38-136",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "31",
    "id": "141-31",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "63",
    "id": "141-63",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "136",
    "id": "141-136",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "197",
    "id": "38-197",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "32",
    "id": "38-32",
    "size": 1.0
  },
  {
    "source": "197",
    "target": "32",
    "id": "197-32",
    "size": 0.5
  },
  {
    "source": "197",
    "target": "141",
    "id": "197-141",
    "size": 0.5
  },
  {
    "source": "197",
    "target": "174",
    "id": "197-174",
    "size": 0.5
  },
  {
    "source": "6",
    "target": "38",
    "id": "6-38",
    "size": 2
  },
  {
    "source": "6",
    "target": "221",
    "id": "6-221",
    "size": 0.5
  },
  {
    "source": "32",
    "target": "23",
    "id": "32-23",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "23",
    "id": "38-23",
    "size": 0.5
  },
  {
    "source": "114",
    "target": "23",
    "id": "114-23",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "53",
    "id": "38-53",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "459",
    "id": "38-459",
    "size": 0.5
  },
  {
    "source": "174",
    "target": "36",
    "id": "174-36",
    "size": 0.5
  },
  {
    "source": "174",
    "target": "53",
    "id": "174-53",
    "size": 0.5
  },
  {
    "source": "174",
    "target": "459",
    "id": "174-459",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "201",
    "id": "38-201",
    "size": 1.5
  },
  {
    "source": "38",
    "target": "34",
    "id": "38-34",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "278",
    "id": "38-278",
    "size": 0.5
  },
  {
    "source": "201",
    "target": "34",
    "id": "201-34",
    "size": 0.5
  },
  {
    "source": "201",
    "target": "36",
    "id": "201-36",
    "size": 0.5
  },
  {
    "source": "201",
    "target": "141",
    "id": "201-141",
    "size": 0.5
  },
  {
    "source": "201",
    "target": "191",
    "id": "201-191",
    "size": 0.5
  },
  {
    "source": "201",
    "target": "278",
    "id": "201-278",
    "size": 0.5
  },
  {
    "source": "6",
    "target": "85",
    "id": "6-85",
    "size": 0.5
  },
  {
    "source": "6",
    "target": "253",
    "id": "6-253",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "85",
    "id": "38-85",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "253",
    "id": "38-253",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "114",
    "id": "31-114",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "141",
    "id": "31-141",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "174",
    "id": "31-174",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "441",
    "id": "31-441",
    "size": 0.5
  },
  {
    "source": "31",
    "target": "530",
    "id": "31-530",
    "size": 0.5
  },
  {
    "source": "38",
    "target": "530",
    "id": "38-530",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "172",
    "id": "141-172",
    "size": 0.5
  },
  {
    "source": "141",
    "target": "201",
    "id": "141-201",
    "size": 0.5
  }
]

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