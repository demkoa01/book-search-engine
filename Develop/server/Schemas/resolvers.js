// define query and mutation funcationality to work with Mongoose models
const { AuthenticationError } = require('apollo-server-errors');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {};

module.exports = resolvers;