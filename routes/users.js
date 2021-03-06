const { Router } = require('express');
const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');
const { userAboutValidation, avatarValidation, idValidation } = require('../middlewares/validate');

const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.get('/users/me', idValidation, getCurrentUser);
usersRouter.get('/users/:_id/', idValidation, getUserById);
usersRouter.patch('/users/me', userAboutValidation, updateUser);
usersRouter.patch('/users/me/avatar', avatarValidation, updateAvatar);

module.exports = usersRouter;
