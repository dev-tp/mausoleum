import { connection } from '../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connection();

  response
    .status(200)
    .json(
      await database
        .collection('mausoleum')
        .find({ location: request.query.location })
        .toArray()
    );
}
