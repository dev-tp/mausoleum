import SVG from '../SVG';

export default function $name({ spaces }) {
  function render() {
    return (
      <>
        <style jsx>$style</style>
        {spaces.map((space) => (
          <g key={space._id}>
            <path d={space.d} onClick={() => alert(space.space_number)} />
            <text
              className={space.class_name ? space.class_name : ''}
              x={space.x}
              y={space.y}
            >
              {space.space_number}
            </text>
          </g>
        ))}
      </>
    );
  }

  return $body;
}
