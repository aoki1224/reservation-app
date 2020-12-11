const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const productRoutes = require('./route/products');
const path = require('path');

const app = express();
const PORT = process.env.PORT || '3001';

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () =>
  {
    if (process.env.NODE_ENV !== 'production')
    {
      const fakeDb = new FakeDb();
      // fakeDb.initDb;
    }
  }
);

app.use('/api/v1/products', productRoutes);

app.listen(PORT, function ()
{
  console.log('I am running')
});

if (process.env.NODE_ENV === 'production')
{
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get("*", function (req, res)
  {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}


