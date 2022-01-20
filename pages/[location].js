import { useRouter } from 'next/router';
import Link from 'next/link';

import routes from './_routes';

export default function Location() {
  const router = useRouter();
  const route = routes[router.query.location];

  return (
    <div>
      <Link href="/">Back</Link>
      <h1>{route?.label}</h1>
      {route?.component()}
    </div>
  );
}
