const paths = [
  [1080, 645, '26-27A'],
  [1080, 595, '26-27B'],
  [1080, 545, '26-27C'],
  [1080, 495, '26-27D'],
  [900, 645, '28-29A'],
  [900, 595, '28-29B'],
  [900, 545, '28-29C'],
  [900, 495, '28-29D'],
  [720, 645, '25A'],
  [720, 595, '25B'],
  [720, 545, '25C'],
  [720, 495, '25D'],
];

export default function PrivateRoomD() {
  return (
    <svg
      height="1080"
      version="1.1"
      viewBox="0 0 1920 1080"
      width="1920"
      xmlns="http://www.w3.org/2000/svg"
    >
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
            <text x={x + 30} y={y - 10}>
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
