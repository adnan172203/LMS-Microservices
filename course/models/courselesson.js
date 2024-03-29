'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CourseLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CourseLesson.belongsTo(models.Course, {
        foreignKey: {
          name: 'courseId',
        },
        as: 'courseLesson',
      });
    }
  }
  CourseLesson.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: { type: DataTypes.STRING, allowNull: false },

      content: { type: DataTypes.STRING, allowNull: false },

      video: { type: DataTypes.STRING, allowNull: false },

      courseId: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id',
          as: 'courseId',
        },
      },

      userId: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
    },

    {
      sequelize,
      modelName: 'CourseLesson',
    }
  );
  return CourseLesson;
};
