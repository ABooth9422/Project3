module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      post: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      }
    });

    Comment.associate = function(models) {
      Comment.belongsTo(models.ForumTopic, {
        foreignKey: {
          allowNull: false
        }
      });

      Comment.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    
    return Comment;
  };