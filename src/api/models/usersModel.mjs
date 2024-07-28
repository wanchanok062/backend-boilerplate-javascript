import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.mjs'; // ตรวจสอบ path ให้ถูกต้อง

class User extends Model {}

User.init({
  userID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false, // ถ้าไม่ต้องการใช้ฟิลด์ createdAt และ updatedAt ของ Sequelize
  hooks:{
    beforeCreate : (user) => {
      user.user_name = user.user_name.toLowerCase();
    },
    beforeUpdate: (user) => {
      user.user_name = user.user_name.toLowerCase();
    }
  }
});

export default User;