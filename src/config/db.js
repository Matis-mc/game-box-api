import mongoose from 'mongoose';
import { mongoUri } from './env.js';
import { MongoClient } from 'mongodb';


const client = new MongoClient(mongoUri);

export async function connectDb() {
  console.log('Check connection to MongoDB!');
  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
  console.log('You successfully connected to MongoDB!');
} 

export async function disconnectFromMongoDB() {
  await client.close();
}
