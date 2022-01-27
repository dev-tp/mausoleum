import { useRouter } from 'next/router';
import ArrowBack from '@material-ui/icons/ArrowBack';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import { connection } from '../lib/mongodb';
import routes from '../routes';

function getComponent(component) {
  return dynamic(() => import(`../components/generated/${component}`), {
    ssr: false,
  });
}

export default function Location({ spaces }) {
  const router = useRouter();

  if (!router.query.location) {
    return <div />;
  }

  const route = routes[router.query.location];
  const Component = getComponent(route.component);

  return (
    <div>
      <Head>
        <title>{route.label}</title>
      </Head>
      <IconButton style={{ left: '1rem', position: 'absolute', top: '1rem' }}>
        <Link href="/" passHref>
          <ArrowBack />
        </Link>
      </IconButton>
      <Component spaces={JSON.parse(spaces)} />
      <Typography
        style={{
          bottom: '1rem',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%)',
        }}
      >
        {route.label}
      </Typography>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(routes).map((route) => '/' + route),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { database } = await connection();

  const spaces = await database
    .collection('mausoleum')
    .find({ location: params.location })
    .toArray();

  return { props: { spaces: JSON.stringify(spaces) } };
}
