const mongoose = require("mongoose");

const connectWithDb = () => {
//   process.env.DB_URL
    mongoose
    .connect("mongodb+srv://scott:tiger@cluster0.xi7en23.mongodb.net/?retryWrites=true&w=majority",
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB GOT CONNECTED`))
    .catch((error) => {
      console.log(`DB CONNECTION ISSUES`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;
