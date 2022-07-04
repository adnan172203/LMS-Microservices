'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: DataTypes.STRING,

      description: DataTypes.TEXT,

      price: DataTypes.INTEGER,

      duration: DataTypes.INTEGER,

      category: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },

      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Course',
    }
  );
  return Course;
};
