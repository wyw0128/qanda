export const MainIcon: React.FC = () => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='100'
      cy='100'
      r='90'
      fill='#f3f4f6'
      stroke='#e5e7eb'
      stroke-width='2'
    />

    <path
      d='M70,65 Q70,40 100,40 Q130,40 130,65 Q130,85 100,100 Q100,110 100,115'
      fill='none'
      stroke='#4b5563'
      stroke-width='8'
      stroke-linecap='round'
    />

    <circle cx='85' cy='65' r='5' fill='#4b5563' />
    <circle cx='115' cy='65' r='5' fill='#4b5563' />
    <path
      d='M85,95 Q100,105 115,95'
      fill='none'
      stroke='#4b5563'
      stroke-width='3'
      stroke-linecap='round'
    />

    <path
      d='M80,145 L120,145 L100,125 Z'
      fill='#60a5fa'
      stroke='#3b82f6'
      stroke-width='2'
    />

    <text
      x='100'
      y='165'
      font-family='Arial, sans-serif'
      font-size='20'
      text-anchor='middle'
      fill='#374151'
    >
      Q & A
    </text>
  </svg>
);
