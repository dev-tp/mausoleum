import SVG from '../SVG';

const paths = [
  [1080, 645, '91A'],
  [1080, 595, '91B'],
  [1080, 545, '91C'],
  [1080, 495, '91D'],
  [900, 645, '92A'],
  [900, 595, '92B'],
  [900, 545, '92C'],
  [900, 495, '92D'],
  [720, 645, '93A'],
  [720, 595, '93B'],
  [720, 545, '93C'],
  [720, 495, '93D'],
];

export default function PrivateRoomF() {
  return (
    <SVG>
      <g>
        <path d="m710 435h70v10h-70z" />
        <path d="m710 445h10v75h-10z" />
        <path d="m710 520v125h10v-125z" />
        <path d="m710 645h70v10h-70z" />
        <path d="m710 655h140v-219.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m780 435h70v10h-70z" />
        <path d="m780 645h70v10h-70z" />
        <path d="m840 445h10v75h-10z" />
        <path d="m840 520h10v125h-10z" />
        <path d="m890 435h70v10h-70z" />
        <path d="m890 445h10v75h-10z" />
        <path d="m890 520v125h10v-125z" />
        <path d="m890 645h70v10h-70z" />
        <path d="m890 655h140v-219.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m960 435h70v10h-70z" />
        <path d="m960 645h70v10h-70z" />
        <path d="m1020 445h10v75h-10z" />
        <path d="m1020 520h10v125h-10z" />
        <path d="m1070 435h70v10h-70z" />
        <path d="m1070 445h10v75h-10z" />
        <path d="m1070 520v125h10v-125z" />
        <path d="m1070 645h70v10h-70z" />
        <path d="m1070 655h140v-219.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m1140 435h70v10h-70z" />
        <path d="m1140 645h70v10h-70z" />
        <path d="m1200 445h10v75h-10z" />
        <path d="m1200 520h10v125h-10z" />
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
