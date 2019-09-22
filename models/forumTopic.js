module.exports = function(sequelize, DataTypes) {
    var ForumTopic = sequelize.define("ForumTopic", {
      topic: {
        type: DataTypes.STRING,
        validate:{
          len: [1,100]
        },
        allowNull: false
      } ,
      post: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      likedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '' 
      }
    }
    );

    ForumTopic.associate = function(models) {
      ForumTopic.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

      ForumTopic.hasMany(models.Comment, {
        onDelete: "cascade"
      })
    };


    return ForumTopic;
  };