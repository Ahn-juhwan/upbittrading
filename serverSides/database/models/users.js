module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: '유저 아이디',
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: '유저 비밀번호',
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: '유저 이름',
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: '유저 이메일',
      },
      upbitAccessToken: {
        type: DataTypes.STRING(100),
        comment: 'upbit access token',
      },
      upbitSecretToken: {
        type: DataTypes.STRING(100),
        comment: 'upbit secret token',
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  return users;
};
