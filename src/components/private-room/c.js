import SVG from '../SVG';

const paths = [
  [900, 645, '24A'],
  [900, 595, '24B'],
  [900, 545, '24C'],
  [900, 495, '24D'],
];

export default function PrivateRoomC() {
  return (
    <SVG>
      <g>
        <path d="m890 435h70v10h-70z" />
        <path d="m890 445h10v75h-10z" />
        <path d="m890 520v125h10v-125z" />
        <path d="m890 645h70v10h-70z" />
        <path d="m890 655h140v-219.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m960 435h70v10h-70z" />
        <path d="m960 645h70v10h-70z" />
        <path d="m1020 445h10v75h-10z" />
        <path d="m1020 520h10v125h-10z" />
      </g>
      <g>
        {paths.map(([x, y, label]) => (
          <g key={label} onClick={() => console.log(label)}>
            <path d={`m${x} ${y}h120v-50h-120z`} />
            <text textAnchor="start" x={x + 10} y={y - 10}>
              {label}
            </text>
          </g>
        ))}
      </g>
    </SVG>
  );
}
