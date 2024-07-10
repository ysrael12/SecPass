import { DataTypes } from "sequelize";
import {sequelize} from '../dbConnection.js';
import { User } from "./Users.js";


export const Passwords = sequelize.define('Passwords', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    psw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId : {
        type : DataTypes.INTEGER,
        references : {
            model : User,
            key : "id"
        }
    }
  }, {
    timestamps: true
  });

User.hasMany(Passwords, { foreignKey: 'userId' });
Passwords.belongsTo(User, { foreignKey: 'userId' });