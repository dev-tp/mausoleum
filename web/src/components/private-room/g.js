import SVG from '../SVG';

const paths = [
  [720, 670, '137-138A'],
  [720, 620, '137-138B'],
  [720, 570, '137-138C'],
  [720, 520, '137-138D'],
  [720, 470, '137-138E'],
  [900, 670, '136A'],
  [900, 620, '136B'],
  [900, 570, '136C'],
  [900, 520, '136D'],
  [1080, 670, '139A'],
  [1080, 620, '139B'],
  [1080, 570, '139C'],
  [1080, 520, '139D'],
  [1080, 470, '139E'],
];

export default function PrivateRoomG() {
  return (
    <SVG>
      <g>
        <path d="m710 410h70v10h-70z" />
        <path d="m710 420h10v125h-10z" />
        <path d="m710 545v125h10v-125z" />
        <path d="m710 670h70v10h-70z" />
        <path d="m710 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m780 410h70v10h-70z" />
        <path d="m780 670h70v10h-70z" />
        <path d="m840 420h10v125h-10z" />
        <path d="m840 545h10v125h-10z" />
        <path d="m890 410h70v10h-70z" />
        <path d="m890 420h10v125h-10z" />
        <path d="m890 545v125h10v-125z" />
        <path d="m890 670h70v10h-70z" />
        <path d="m890 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m900 470h120v-50h-120z" />
        <path d="m960 410h70v10h-70z" />
        <path d="m960 670h70v10h-70z" />
        <path d="m1020 420h10v125h-10z" />
        <path d="m1020 545h10v125h-10z" />
        <path d="m1070 410h70v10h-70z" />
        <path d="m1070 420h10v125h-10z" />
        <path d="m1070 545v125h10v-125z" />
        <path d="m1070 670h70v10h-70z" />
        <path d="m1070 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m1140 410h70v10h-70z" />
        <path d="m1140 670h70v10h-70z" />
        <path d="m1200 420h10v125h-10z" />
        <path d="m1200 545h10v125h-10z" />
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
