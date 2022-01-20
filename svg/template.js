import dynamic from 'next/dynamic';

export default function $name() {
  const SVG = dynamic(() => import('../SVG'));

  function render() {}

  return $body;
}
