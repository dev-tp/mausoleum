import { useRouter } from 'next/router';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Head from 'next/head';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import routes from './_routes';

export default function Location() {
  const router = useRouter();
  const route = routes[router.query.location];

  return (
    <div>
      <Head>
        <title>{route?.label}</title>
      </Head>
      <IconButton style={{ left: '1rem', position: 'absolute', top: '1rem' }}>
        <Link href="/">
          <ArrowBack />
        </Link>
      </IconButton>
      {route?.component()}
      <Typography
        style={{
          bottom: '1rem',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%)',
        }}
      >
        {route?.label}
      </Typography>
    </div>
  );
}
