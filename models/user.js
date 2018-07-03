const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  /* 
    Define your user info for the schema here, no need for "username" and "pw" fields, since passport will set those for you
  */
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
