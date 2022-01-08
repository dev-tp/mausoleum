import React from 'react';

import SVG from '../SVG';

const colors = [
  { fill: '#fff0', color: '#000' },
  { fill: '#673ab7', color: '#000' },
  { fill: '#2196f3', color: '#000' },
  { fill: '#8bc34a', color: '#000' },
];

export default function $name() {
  const [spaces, setSpaces] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/$url')
      .then((response) => response.json())
      .then((json) => setSpaces(json));
  }, [setSpaces]);

  function render() {
    return spaces.map((space, i) => (
      <g key={i} onClick={() => update(space)}>
        <path d={space.d} style={{ fill: colors[space.status].fill }} />
        <text
          style={{ fill: colors[space.status].color }}
          x={space.x}
          y={space.y}
        >
          {space.space_number}
        </text>
      </g>
    ));
  }

  function update(modified) {
    modified.status = (modified.status + 1) % 4;

    fetch('/api/' + modified.id, {
      body: JSON.stringify(modified),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.error) {
          setSpaces(
            spaces.map((space) => (space.id === modified.id ? modified : space))
          );
        }
      })
      .catch((error) => console.error(error));
  }

  return $body;
}
