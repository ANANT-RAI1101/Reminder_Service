'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notificationticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notificationticket.init({
    subject:{
     type:sequelize.STRING,
     allowNull:false
    },
    content: {
      type:sequelize.STRING,
      allowNull:false
    },
    recepientEmail: {
      type:sequelize.STRING,
      allowNull:false
    },
    status: {
      type:sequelize.ENUM,
      allowNull:false,
      values:["PENDING","SUCCESS","FAILED"],
      defaultValue:"PENDING"
    },
    notificationTime: {
      type:sequelize.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'notificationticket',
  });
  return notificationticket;
};