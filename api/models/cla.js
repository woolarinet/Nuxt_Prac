module.exports = function(sequelize, DataTypes) {
    const cla = sequelize.define('cla', {
        name: {
            type:DataTypes.STRING(266),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER(11),
            dealutValue: 0
        }
    }, {
        timestamps: false,
        tableName: "cla",
    })
    return cla
}
