const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DB_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('Database connection successfull!!!');
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
