const { db } = require('./models');
const { Vegetable } = require('./models');
db
  .sync({ force: true })
  .then(() => {
    return Vegetable.create({
      name: 'carrots',
      color: 'purple',
      planted_on: 'October, 5 2017',
    });
  })
  .then(() => {
    return Vegetable.create({
      name: 'brocolli',
      color: 'green',
      planted_on: 'March, 20 2017',
    });
  })
  .then(() => db.close())
  .catch(err => {
    console.error(err);
    db.close();
  });
