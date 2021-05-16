const Movie = require('./Movie');
const User = require('./User');

User.hasMany(Movie);
Movie.belongsTo(User);

module.exports = { Movie, User };