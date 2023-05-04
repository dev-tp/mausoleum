import Head from 'next/head';
import React from 'react';

import AlcoveOfTheSaintsABCD from '../svg/Alcove of the Saints - ABCD.svg';

export default function Home() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const paths = ref.current.querySelector('g').querySelectorAll('path');

    function onClick(event) {
      console.log(event);
    }

    paths.forEach((element) =>
      element.addEventListener('click', onClick, false)
    );

    return () =>
      paths.forEach((element) =>
        element.removeEventListener('click', onClick, false)
      );
  }, []);

  return (
    <div>
      <Head>
        <title>Mausoleum</title>
      </Head>
      <AlcoveOfTheSaintsABCD ref={ref} />
    </div>
  );
}
