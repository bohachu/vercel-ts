import { NextApiHandler } from 'next';
import { addItems } from './db/connectMongo';

const handler: NextApiHandler = async (_, res) => {
  try {
    await addItems();
    res.status(200).json({ message: 'Items added successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add items.' });
  }
};

export default handler;
