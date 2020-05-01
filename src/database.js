const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Car_98:Car1903@cardb-bmwvc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));