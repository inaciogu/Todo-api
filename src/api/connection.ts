import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/todo-list';

const connectDatabase = () => mongoose.connect(MONGO_DB_URL);

export default connectDatabase;
