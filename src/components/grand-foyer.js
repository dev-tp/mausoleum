const paths = [
  [630, 670, '3-4A'],
  [630, 620, '3-4B'],
  [630, 570, '3-4C'],
  [630, 520, '3-4D'],
  [630, 470, '3-4E'],
  [810, 670, '8-9A'],
  [810, 620, '8-9B'],
  [810, 570, '8-9C'],
  [810, 520, '8-9D'],
  [810, 470, '8-9E'],
  [990, 670, '10-11A'],
  [990, 620, '10-11B'],
  [990, 570, '10-11C'],
  [990, 520, '10-11D'],
  [990, 470, '10-11E'],
  [1170, 670, '14-15A'],
  [1170, 620, '14-15B'],
  [1170, 570, '14-15C'],
  [1170, 520, '14-15D'],
  [1170, 470, '14-15E'],
];

export default function GrandFoyer() {
  return (
    <svg
      height="1080"
      version="1.1"
      viewBox="0 0 1920 1080"
      width="1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m620 410h70v10h-70z" />
        <path d="m620 420h10v125h-10z" />
        <path d="m620 545v125h10v-125z" />
        <path d="m620 670h70v10h-70z" />
        <path d="m620 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m690 410h70v10h-70z" />
        <path d="m690 670h70v10h-70z" />
        <path d="m750 420h10v125h-10z" />
        <path d="m750 545h10v125h-10z" />
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
        <path d="m1160 410h70v10h-70z" />
        <path d="m1160 420h10v125h-10z" />
        <path d="m1160 545v125h10v-125z" />
        <path d="m1160 670h70v10h-70z" />
        <path d="m1160 680h140v-269.94l-20-0.05873v-10h-100v10h-20z" />
        <path d="m1230 410h70v10h-70z" />
        <path d="m1230 670h70v10h-70z" />
        <path d="m1290 420h10v125h-10z" />
        <path d="m1290 545h10v125h-10z" />
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
