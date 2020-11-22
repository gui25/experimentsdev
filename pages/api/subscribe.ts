import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from '../api/database';


export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('subscribers');

  await collection.insertOne({
    email,
    subscribedAt: new Date(),
  })

  return response.status(201).json({ ok: true });
}