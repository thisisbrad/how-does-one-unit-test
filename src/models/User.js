'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        validate: {
          isUUID: { args: 4, msg: 'Id not valid, please try again' },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: { args: true, msg: 'Email is already in use' },
        allowNull: { args: false, msg: 'Email is required' },
        validate: {
          isEmail: { args: true, msg: 'Email is not correct format' },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: { args: false, msg: 'Password is required' },
        // validate: {
        //   len: {
        //     args: [2, 10],
        //     msg: 'Password needs to be between 2-10 characters',
        //   },
        // },
      },
    },
    {}
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
