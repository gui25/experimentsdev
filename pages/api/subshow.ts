import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from '../api/database';


export default async (request: NowRequest, response: NowResponse) => {

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('subscribers');

  await collection.find();


  return response.status(201).json({ ok: true });
}