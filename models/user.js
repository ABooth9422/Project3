module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      googleId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 240]
        }
      },
      email: {
          type: DataTypes.STRING,
          validate: {
              isEmail: true
              
          }
      },
      img: {
          type: DataTypes.TEXT('long'),
          allowNull:false,
          validate:{
            isURL:true
          }
      },
      favWorkout: {
        type: DataTypes.STRING,
        allowNull:false
      },
      signature: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'default'
      }
    }
    );

    User.associate = (models) =>{
      User.hasMany(models.ForumTopic), {
        onDelete: "cascade"
      };
      User.hasMany(models.favGym),{
        onDelete:"cascade"
      }

      User.hasMany(models.Comment), {
        onDelete: "cascade"
      };
    }
    
    return User;
  };
