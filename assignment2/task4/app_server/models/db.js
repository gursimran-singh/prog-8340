const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://admin:admin@fall2021.e4xnl.mongodb.net/foodDB?retryWrites=true&w=majority";
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose Disconnected");
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// nodemon changes
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restared", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

// for application termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});

// for Heroku termination
process.on('SIGTERM', () => {
    gracefulShutdown("Heroku app termination", () => {
        process.kill(0);
    });
});

require('./food');
