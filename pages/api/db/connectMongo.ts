import { MongoClient, Db, Collection } from "mongodb";

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

export async function addItems() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database: Db = client.db('test');
    const movies: Collection = database.collection('test_collection');

    const moviesToAdd = [
      { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
      { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
      { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 }
    ];

    const result = await movies.insertMany(moviesToAdd);
    console.log(`${result.insertedCount} movies added successfully.`);
  } catch (err) {
    console.error(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

