const mongoose = require("mongoose");

const DB = "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";

mongoose.connect(DB, {

}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
});

// Handling additional connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});

// Graceful app termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose default connection disconnected through app termination');
  process.exit(0);
});
