import { Router } from 'express';
import User from '../model/user';

const authRouter = new Router();

authRouter.post('/signup', (req, res) => {
  User.create(req.body)
    .then((token) => res.send(token))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

authRouter.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.send(users);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

authRouter.get('/api/users/:id', (req, res) => {
  User.find({ _id: req.params.id }, (err, users) => {
    res.send(users);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

export default authRouter;
