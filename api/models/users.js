module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {
        userID: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        name: {
            type:DataTypes.STRING(10),
            allowNull: false,
        },
    }, {
        timestamps: false,
        underscored: true,
    })
    return users
}
