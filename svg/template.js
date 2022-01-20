import dynamic from 'next/dynamic';

// import './$name.css';

export default function $name() {
  const SVG = dynamic(() => import('../SVG'));

  function render() {}

  return $body;
}
