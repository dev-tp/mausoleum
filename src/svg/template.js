import React from 'react';

import SVG from '../SVG';

export default function $name() {
  const [props, setProps] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/$url')
      .then((response) => response.json())
      .then((json) => setProps(json));
  }, [setProps]);

  function render() {
    return props.map((prop, i) => (
      <g key={i} onClick={() => alert(i)}>
        <path d={prop.d} />
        <text x={prop.x} y={prop.y}>
          {prop.spaceNumber}
        </text>
      </g>
    ));
  }

  return $body;
}
