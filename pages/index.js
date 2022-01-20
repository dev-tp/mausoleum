import Head from 'next/head';

import Mausoleum from '../components/Mausoleum';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mausoleum</title>
      </Head>
      <Mausoleum />
    </div>
  );
}
