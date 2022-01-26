import { connection } from '../../lib/mongodb';

export default async function handler(_, response) {
  try {
    response.status(200).json({ ok: !!(await connection()).database });
  } catch (error) {
    response.status(500).json(error);
  }
}
