import dynamic from 'next/dynamic';
import React from 'react';

export default function $name() {
  const SVG = dynamic(() => import('../SVG'));

  const [spaces, setSpaces] = React.useState([]);
  const location = '$url';

  React.useEffect(
    () =>
      fetch('/api/' + location)
        .then((response) => response.json())
        .then((json) => setSpaces(json)),
    []
  );

  function render() {
    return spaces.map((space) => (
      <g key={space.id} onClick={() => {}}>
        <path d={space.d} />
        <text
          className={space.class_name ? space.class_name : ''}
          x={space.x}
          y={space.y}
        >
          {space.space_number}
        </text>
      </g>
    ));
  }

  return $body;
}
