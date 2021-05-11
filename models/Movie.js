const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  {
    title: DataTypes.STRING,
    allowNull: false
  },
  {
    release_date: DataTypes.STRING,
    allowNull: false,
  },
  {
    poster_path: DataTypes.STRING,
    allowNull: false,
  },
  {
    overview: DataTypes.STRING,
    allowNull: false
  },
  {
    vote_avg: DataTypes.INTEGER,
    allowNull: false
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  },
);

module.exports = Movie;