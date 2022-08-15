"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodemon = require('nodemon');
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _Userjs2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _Userjs2.default.findAll({
        attributes: ['id', 'nome', 'email']
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      // const { id } = req.params;
      const user = await _Userjs2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Missing user'],
        });
      }

      const newData = await user.update(req.body);
      const { id, nome, email } = newData;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Missing user'],
        });
      }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }
}

exports. default = new UserController();
