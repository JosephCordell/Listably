const List = require('./List');
const Movie = require('./Movie');
const User = require('./User');

// RELATIONSHIPS...
User.belongsToMany(Movie, { through: List });
Movie.belongsToMany(User, { through: List });

module.exports = { List, Movie, User };