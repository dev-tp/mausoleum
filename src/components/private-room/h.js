const paths = [
  [900, 670, '140A'],
  [900, 620, '140B'],
  [900, 570, '140C'],
  [900, 520, '140D'],
  [900, 470, '140E'],
];

export default function PrivateRoomH() {
  return (
    <svg
      height="1080"
      version="1.1"
      viewBox="0 0 1920 1080"
      width="1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m890 410h70v10h-70z" />
        <path d="m890 420h10v125h-10z" />
        <path d="m890 545v125h10v-125z" />
        <path d="m890 670h70v10h-70z" />
        <path d="m890 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m960 410h70v10h-70z" />
        <path d="m960 670h70v10h-70z" />
        <path d="m1020 420h10v125h-10z" />
        <path d="m1020 545h10v125h-10z" />
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
