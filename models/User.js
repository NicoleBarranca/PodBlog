const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  // password validator
  validatePw(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [[5, 20]],
          msg: "Username must be between 5 and 20 characters.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        is: {
          args: [/^(?=.*\d)(?=.*[a-zA-Z]).{6,15}$/],
          msg: "Must be between 6-15 characters and contain a number.",
        },
      },
    },
  },
  {
    hooks: {
      // password encryption
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      },
      async beforeUpdate(updatedUser) {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        return updatedUser;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "user",
  }
);

module.exports = User;
