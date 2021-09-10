import SVG from '../SVG';

const paths = [
  [810, 670, '21-22A'],
  [810, 620, '21-22B'],
  [810, 570, '21-22C'],
  [810, 520, '21-22D'],
  [810, 470, '21-22E'],
  [990, 670, '23A'],
  [990, 620, '23B'],
  [990, 570, '23C'],
  [990, 520, '23D'],
  [990, 470, '23E'],
];

export default function PrivateRoomB() {
  return (
    <SVG>
      <g>
        <path d="m800 410h70v10h-70z" />
        <path d="m800 420h10v125h-10z" />
        <path d="m800 545v125h10v-125z" />
        <path d="m800 670h70v10h-70z" />
        <path d="m800 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m870 410h70v10h-70z" />
        <path d="m870 670h70v10h-70z" />
        <path d="m930 420h10v125h-10z" />
        <path d="m930 545h10v125h-10z" />
        <path d="m980 410h70v10h-70z" />
        <path d="m980 420h10v125h-10z" />
        <path d="m980 545v125h10v-125z" />
        <path d="m980 670h70v10h-70z" />
        <path d="m980 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m1050 410h70v10h-70z" />
        <path d="m1050 670h70v10h-70z" />
        <path d="m1110 420h10v125h-10z" />
        <path d="m1110 545h10v125h-10z" />
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
