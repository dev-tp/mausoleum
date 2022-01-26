import { connection } from '../../lib/mongodb';

export default function handler(_, response) {
  connection()
    .then((connection) =>
      response.status(200).json({ ok: !!connection.database })
    )
    .catch((error) => response.status(500).json(error));
}
