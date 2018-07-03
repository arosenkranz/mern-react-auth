const db = require('../models');
const User = require('../models/user');

module.exports = {
  findAll: function (req, res) {
    db
      .User
      .find(req.query)
      .sort({date: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db
      .User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db
      .User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    User.findOneAndUpdate({
      _id: req.params.id
    }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db
      .User
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function (req, res) {
    /* To create a new user */
    User
      .register(new User({username: req.body.username}), req.body.password, function (err) {
        if (err) {
          console.log('error while user register!', err);
          return res.status(422).json(err);
        }
        console.log('user registered!');
        res.json(true);
      });
  }
};
