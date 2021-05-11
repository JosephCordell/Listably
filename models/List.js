const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const Movie = require('./Movie');
const User = require('./User');

class List extends Model {}

List.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  {
    user_id: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: id
    }
  },
  {
    movie_id: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Movie,
      key: id,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list'
  }
);

module.exports = List;