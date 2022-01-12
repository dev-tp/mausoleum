import { connect } from 'react-redux';
import React from 'react';

import { openForm, setSpaces } from '../../actions';
import Form from '../Form';
import SVG from '../SVG';

const colors = [
  { fill: '#fff0', color: '#000' },
  { fill: '#673ab7', color: '#000' },
  { fill: '#2196f3', color: '#000' },
  { fill: '#8bc34a', color: '#000' },
];

function $name({ dispatch, mausoleum }) {
  const url = '$url';

  React.useEffect(() => {
    if (!(url in mausoleum.spaces)) {
      fetch('/api/' + url)
        .then((response) => response.json())
        .then((json) => dispatch(setSpaces(url, json)))
        .catch((error) => console.error(error));
    }
  }, [dispatch, mausoleum]);

  function render() {
    if (url in mausoleum.spaces) {
      return mausoleum.spaces[url].map((space, i) => (
        <g key={i} onClick={() => dispatch(openForm(space))}>
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

    return [];
  }

  return (
    <>
      $body
      <Form />
    </>
  );
}

export default connect((state) => state)($name);
