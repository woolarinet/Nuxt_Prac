module.exports = function(sequelize, DataTypes) {
    const sax = sequelize.define('sax', {
        name: {
            type:DataTypes.STRING(266),
            allowNull: false,
            primaryKey: true,
        },
        price: {
            type: DataTypes.INTEGER(11),
            dealutValue: 0
        },
    }, {
        timestamps: false,
        tableName: "sax",
    })
    return sax
}