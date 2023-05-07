module.exports = (sequelize, DataTypes) => {
  const coins = sequelize.define(
    'coins',
    {
      seq: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: 'seq 넘버',
      },
      koreanName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: '코인 이름 (한국어)',
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: '코인 이름 (영어)',
      },
      market: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: '마켓-코인 명',
      },
      marketWarning: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: '주의 / 유의 구분',
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      freezeTableName: true,
    }
  );

  return coins;
};
