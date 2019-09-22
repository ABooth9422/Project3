module.exports = function(sequelize, DataTypes) {
    var favGym = sequelize.define("favGym", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      rating: {
          type: DataTypes.STRING,
          allowNull: false
      },
      img:{
        type: DataTypes.TEXT('long'),
          allowNull:true
      }
        },
        {
        timestamps:false
        }); 

    favGym.associate = function(models) {
        favGym.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });   
    }
    return favGym;
  };