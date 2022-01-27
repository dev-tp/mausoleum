import dynamic from 'next/dynamic';
import Head from 'next/head';

export default function Home() {
  const Mausoleum = dynamic(() => import('../components/Mausoleum'), {
    ssr: false,
  });

  return (
    <div>
      <Head>
        <title>Mausoleum</title>
      </Head>
      <Mausoleum />
    </div>
  );
}
