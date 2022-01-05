import React from 'react';

import SVG from '../SVG';

const colors = [
  { fill: '#fff0', color: '#000' },
  { fill: '#673ab7', color: '#000' },
  { fill: '#2196f3', color: '#000' },
  { fill: '#8bc34a', color: '#000' },
];

export default function $name() {
  const [props, setProps] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/$url')
      .then((response) => response.json())
      .then((json) => setProps(json));
  }, [setProps]);

  function push(prop) {
    console.log(prop);
  }

  function render() {
    return props.map((prop, i) => (
      <g key={i} onClick={() => update(prop.space_number)}>
        <path d={prop.d} style={{ fill: colors[prop.status].fill }} />
        <text style={{ fill: colors[prop.status].color }} x={prop.x} y={prop.y}>
          {prop.space_number}
        </text>
      </g>
    ));
  }

  function update(spaceNumber) {
    let modifiedProp = null;

    setProps(
      props.map((prop) => {
        if (prop.space_number === spaceNumber) {
          return (modifiedProp = { ...prop, status: (prop.status + 1) % 4 });
        }

        return prop;
      })
    );

    push(modifiedProp);
  }

  return $body;
}
