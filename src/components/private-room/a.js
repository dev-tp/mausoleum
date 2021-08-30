const paths = [
  [720, 670, '19A'],
  [720, 620, '19B'],
  [720, 570, '19C'],
  [720, 520, '19D'],
  [720, 470, '19E'],
  [900, 670, '18A'],
  [900, 620, '18B'],
  [900, 570, '18C'],
  [900, 520, '18D'],
  [900, 470, '18E'],
  [1080, 670, '20A'],
  [1080, 620, '20B'],
  [1080, 570, '20C'],
  [1080, 520, '20D'],
  [1080, 470, '20E'],
];

export default function PrivateRoomA() {
  return (
    <svg
      height="1080"
      version="1.1"
      viewBox="0 0 1920 1080"
      width="1920"
      xmlns="http://www.w3.org/2000/svg"
    >
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
            <text x={x + 30} y={y - 10}>
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
